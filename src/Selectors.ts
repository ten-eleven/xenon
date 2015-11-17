
export class Selector {
  parent:Selector
  setParent(parent:Selector) {
    this.parent = parent
  }

  getParents(): Selector[]{
    var parents = this.parent ? this.getParents() : []
    return parents.concat(this)
  }

  locatorCSS() {
    return ""
  }
  toLocator() {
    return By.css(this.locatorCSS())
  }

  toElement(element:protractor.ElementFinder) {
    element.element(this.toLocator())
  }
}

export class QASelector extends Selector {
  constructor(qaSelector:String) {
    super()
  }
}

export class CSSSelector extends Selector {
  constructor(qaSelector:String) {
    super()
  }
}
