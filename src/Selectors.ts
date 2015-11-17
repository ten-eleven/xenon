
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

export class CSSIndexSelector extends Selector {
  constructor(public value:string, public index:number) {
    super(value);
  }

  toElement (element:protractor.ElementFinder) {
    return element.all(By.css(this.value)).get(this.index);
  }
}
