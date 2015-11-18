import Selector from "./Selector";

export default class QASelector extends Selector {
  locatorCSS() {
    return `[data-qa="${this.value}"]`
  }
}
