
export class Selector {

  constructor(public value:string) {
  }

  locatorCSS() {
    return ""
  }

  toLocator() {
    return By.css(this.locatorCSS())
  }

  toElement(element:protractor.ElementFinder) {
    return element.element(this.toLocator())
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
