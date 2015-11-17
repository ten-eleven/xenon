import {Selector,QASelector,CSSSelector} from "./Selectors"


export class Component {
  constructor(parent?:Component) {
  }

  waitUntilPresent():protractor.WebElementPromise {
    return null
  }
}

export class Input extends Component {
  constructor(parent:Component, selector:Selector) {
    super(parent);
  }
}

export class Button extends Component {
  constructor(parent:Component, selector:Selector) {
    super(parent);
  }
}
