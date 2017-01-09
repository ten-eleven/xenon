import {Selector, QASelector, CSSSelector} from "../selectors"
import {WebElementPromise, browser, By, promise} from 'protractor'
import * as webdriver from 'selenium-webdriver'

export interface ComponentClass<T extends Component> {
  create(component:Component, options:any):T;
  new(component:Component):T
}

export default class Component {
  selector:Selector;
  private states:Object;

  constructor(public parent?:Component) {
    this.autoConstruct();
  }

  static create(parent, options){
    return new this(parent).setMultiple(options)
  }

  private autoConstruct(){
    var builders, defaults
    if(builders = this.constructor.prototype._builders) {
      for(var k in builders) {
        var def = builders[k]
        var component = this[k] = new (def.type || Component)(this)
        component.setMultiple(def.setters)
      }
    }

    if(defaults = this.constructor.prototype.defaults){
      this.setMultiple(defaults)
    }

  }

  private setMultiple(props){
    for(var k in props){
      if(typeof this[k] === 'function') {
        this[k](props[k])
      } else {
        this[k] = props[k]
      }
    }
  }

  qa(qaString) {
    return this.setSelector(new QASelector(qaString))
  }

  css(cssString) {
    return this.setSelector(new CSSSelector(cssString))
  }
  setSelector(selector:Selector) {
    this.selector = selector
    return this
  }

  private getAncestors():Component[]{
    var ancestors = this.parent ? this.parent.getAncestors() : []
    return ancestors.concat([this])
  }

  getElement(): WebElementPromise {
    var ancestors = this.getAncestors();
    var reducer = function (currentElement, component:Component) {
      if(component.selector){
        return component.selector.toElement(currentElement);
      } else {
        return currentElement
      }
    }
    var nullElement = {element:browser.element};
    return ancestors.reduce(reducer, nullElement);
  }

  isDisplayed(): webdriver.promise.Promise<boolean> {
    return this.getElement().isDisplayed();
  }

  scrollIntoView():webdriver.promise.Promise<{}> {
    let scrollIntoView = (element:any) => {
      element.scrollIntoView(true);
    }
    // get around the outofdate def file by using any type
    let element:any = this.getElement();
    return browser.executeScript(scrollIntoView, element.getWebElement());
  }

  getText(): webdriver.promise.Promise<string> {
    return this.getElement().getTagName().then((t) => {
      const tagName = t.toLowerCase()
      if (tagName == "input" || tagName == "textarea") {
        return this.getElement().getAttribute("value")
      } else {
        return this.getElement().getText()
      }
    })

  }

  selectOption(value:string):void {
    let selectList:any = this.getElement();
    selectList.click();
    let desiredOption:any = null;
    selectList
      .all(By.css("option"))
      .then((options) => {
        promise.fullyResolved(options.map((option:any) => {
          option
            .getText()
            .then((t) => {
              if (value == t) {
                desiredOption = option;
              }
              return true;
            })
          }))
        })
        .then(() => {
            if (desiredOption) {
              desiredOption.click();
            }
          })
  }

  private isVisibleCheck(shouldBeVisible:boolean){ return ():any=> {
    var self = this
    return browser.isElementPresent(self.getElement())
      .then((isPresent:Boolean) => {
        if (isPresent) {
          return self.scrollIntoView().then(() => {
            return self.getElement().isDisplayed().then((isDisplayed)=> {
              return isDisplayed === shouldBeVisible
            })
          })
        };
        return false === shouldBeVisible;
      })
  }}


  isVisible(timeout:number=5000):webdriver.promise.Promise<boolean> {
    return browser.wait(this.isVisibleCheck(true), timeout);
  }

  isNotVisible(timeout:number=5000):webdriver.promise.Promise<boolean> {
    return browser.wait(this.isVisibleCheck(false), timeout);
  }

  click():void {
    this.getElement().click();
  }

  type(value:string):void {
    this.getElement().clear();
    this.getElement().sendKeys(value);
  }

  is(stateName:string):webdriver.promise.Promise<boolean> {
    let stateValue:string = this.states[stateName];
    return this.getElement().getAttribute("class").then((classNames:string) => {
      let classNamesArray:Array<string> = classNames.split(" ");
      return !!(classNamesArray.indexOf(stateValue))
    })
  }
}
