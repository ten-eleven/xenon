import Selector from "./Selector";

export default class CSSSelector extends Selector {
  locatorCSS(){
    return this.value;
  }
}
