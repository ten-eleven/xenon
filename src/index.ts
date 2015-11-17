import {Selector,QASelector,CSSSelector} from "./Selectors";

export class Component {
  selector:Selector
  parent:Component
  constructor(parent?:Component) {
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

  getAncestors():Component[]{
    var ancestors = this.parent ? this.parent.getAncestors() : []
    return ancestors.concat([this])
  }

  getElement():protractor.WebElementPromise {
    var ancestors = this.getAncestors()
    var reducer = function (currentElement, component:Component) {
      return component.selector.toElement(currentElement)
    }
    var nullElement = {element:browser.element}
    return ancestors.reduce(reducer, nullElement)
  }

  isDisplayed():webdriver.promise.Promise<boolean> {
    return this.getElement().isDisplayed();
  }

  scrollIntoView():webdriver.promise.Promise<{}> {
    let scrollIntoView = (element:any) => {
      element.scrollIntoView(true);
    }

    let element:any = this.getElement();
    return browser.executeScript(scrollIntoView, element.getWebElement());
  }

  isVisible(timeout:number):webdriver.promise.Promise<boolean> {
    let self = this;
    let visibleCheckFn:any = () => {
      return browser.isElementPresent(self.getElement())
        .then((isPresent:Boolean) => {
          return self.scrollIntoView().then(() => {
            return self.getElement().isDisplayed();
          })
        })
    };
    return browser.wait(visibleCheckFn, timeout);
  }
}

export class Input extends Component {
  constructor(parent:Component) {
    super(parent);
  }
}

export class Button extends Component {
  constructor(parent:Component) {
    super(parent);
  }
}
