import Selector from "./Selector";

export default class CSSIndexSelector extends Selector {
  constructor(public value:string, public index:number) {
    super(value);
  }

  toElement (element:protractor.ElementFinder) {
    return element.all(By.css(this.value)).get(this.index);
  }
}
