import Selector from "./Selector";
import { By, ElementFinder } from 'protractor'

export default class CSSIndexSelector extends Selector {
  constructor(public value:string, public index:number) {
    super(value)
  }

  toElement (element: ElementFinder) {
    return element.all(By.css(this.value)).get(this.index)
  }
}
