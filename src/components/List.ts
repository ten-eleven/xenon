import {ComponentClass} from "./Component";
import Component from "./Component";
import {
  Selector,
  QASelector,
  CSSSelector,
  CSSIndexSelector,
  CSSTextSelector
} from "../selectors";

export default class List<T extends Component> extends Component {

  itemSelector:Selector;
  itemType:ComponentClass<T>

  itemQA(value:string) {
    this.itemSelector = new QASelector(value);
  }

  itemCSS(value:string) {
    this.itemSelector = new CSSSelector(value);
  }

  get(index:number):T {
    let selector = new CSSIndexSelector(this.itemSelector.locatorCSS(), index);
    let componentType = new this.itemType(this).setSelector(selector);
    return <T>componentType;
  }

  count():number {
    let elem:any = this.getElement()
    return elem.all(this.itemSelector.toLocator()).count();
  }

  getByText(text:string, exactTextMatch:boolean=true):T {
    let selector = new CSSTextSelector(this.itemSelector.locatorCSS(), text, exactTextMatch );
    let componentType = new this.itemType(this).setSelector(selector);
    return <T>componentType;
  }

}
