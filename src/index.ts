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
