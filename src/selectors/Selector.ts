import { By, ElementFinder } from 'protractor'

export default class Selector {

  constructor(public value:string) {
  }

  locatorCSS() {
    return ""
  }

  toLocator(): any {
    return By.css(this.locatorCSS())
  }

  toElement(element: ElementFinder) {
    return element.element(this.toLocator())
  }
}
