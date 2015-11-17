import {Selector,QASelector,CSSSelector} from "./Selectors";

export class Component {
  selector:Selector

  constructor(parent?:Component) {
  }

  qa(qaString) {
    this.selector = new QASelector(qaString)
    return this
  }
  css(cssString) {
    this.selector = new CSSSelector(cssString)
    return this
  }
  setSelector(selector:Selector) {
    this.selector = selector
    return this
  }

  waitUntilPresent():protractor.WebElementPromise {
    return null;
  }

  getElement():protractor.WebElementPromise {
    return null;
  }

  isDisplayed():webdriver.promise.Promise<boolean> {
    return this.getElement().isDisplayed();
  }

  scrollIntoView():webdriver.promise.Promise<{}> {
    return browser.executeScript("arguments[0].scrollIntoView(true);", this.getElement());
  }

  isVisible(timeout:number):webdriver.promise.Promise<boolean> {
    let visibleCheckFn:any = () => {
      return browser.isElementPresent(this.getElement())
        .then((isPresent:Boolean) => {
          if (isPresent) {
            return this.scrollIntoView().then(() => {
              return this.getElement().isDisplayed();
            })
          } else {
            return false;
          }
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
