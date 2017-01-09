import Selector from "./Selector"
import {By, ElementFinder} from 'protractor'

export default class CSSTextSelector extends Selector {
  constructor(public value:string, public text:string, public exact:boolean) {
    super(value);
    if (By["cssExactText"] == null) {

      By.addLocator('cssExactText', (css,text,parent,root) => {
        let e = parent || document;
        let elements = e.querySelectorAll(css);

        Array.prototype.filter.call(elements, (element) => {
          let textMatch = (element):boolean => {
            return (element.textContent != null && element.textContent.trim() == text);
          }

          if (textMatch(element)) {
            return element;
          }
          let children:Array<Object> = element.querySelectorAll("*");
          for (let childElement of children) {
            if (textMatch(childElement)) {
              return element;
            }
          }
        })
      })
    }
  }

  toElement (element: ElementFinder) {
    if (this.exact) {
      return element.element(By["cssExactText"](this.value, this.text));
    } else {
      return element.element(By.cssContainingText(this.value, this.text));
    }
  }
}
