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
