export default class Selector {

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
