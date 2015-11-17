import {Selector,QASelector,CSSSelector} from "./Selectors";

export class Component {
  selector:Selector
  parent:Component
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
