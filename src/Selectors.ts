
export class Selector {
  parent:Selector
  constructor(public value:string) {

  }
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
  locatorCSS() {
    return `[data-qa="${this.value}"]`
  }
}

export class CSSSelector extends Selector {
  locatorCSS(){
    return this.value
  }
}
