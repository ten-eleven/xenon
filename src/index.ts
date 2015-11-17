import {Selector,QASelector,CSSSelector,CSSIndexSelector, CSSTextSelector} from "./Selectors";

export class Component {
  selector:Selector;

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

  waitUntilPresent():protractor.WebElementPromise {
    return null;
  }

  private getAncestors():Component[]{
    var ancestors = this.parent ? this.parent.getAncestors() : []
    return ancestors.concat([this])
  }

  getElement():protractor.WebElementPromise {
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

  isDisplayed():webdriver.promise.Promise<boolean> {
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
    return this.getElement().getText();
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
}

export class Input extends Component {
  constructor(parent:Component) {
    super(parent);
  }

  type(value:string):void {
    this.getElement().clear();
    this.getElement().sendKeys(value);
  }

}

export class Button extends Component {
  constructor(parent:Component) {
    super(parent);
  }
}

interface ComponentClass<T extends Component> {
  create(component:Component, options:any):T;
  new(component:Component):T
}

export class List<T extends Component> extends Component {

  itemSelector:Selector;
  itemType:ComponentClass<T>

  itemQA(value:string) {
    this.itemSelector = new QASelector(value);
  }

  itemCSS(value:string) {
    this.itemSelector = new CSSSelector(value);
  }

  get(index:number):T {
    let selector = new CSSIndexSelector(this.itemSelector.locatorCSS(), index);
    let componentType = new this.itemType(this).setSelector(selector);
    return <T>componentType;
  }

  count():number {
    let elem:any = this.getElement()
    return elem.all(this.itemSelector.toLocator()).count();
  }

  getByText(text:string, exactTextMatch:boolean=true):T {
    let selector = new CSSTextSelector(this.itemSelector.locatorCSS(), text, exactTextMatch );
    let componentType = new this.itemType(this).setSelector(selector);
    return <T>componentType;
  }

}
