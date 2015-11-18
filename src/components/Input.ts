import Component from "./Component";

export default class Input extends Component {
  constructor(parent:Component) {
    super(parent);
  }

  type(value:string):void {
    this.getElement().clear();
    this.getElement().sendKeys(value);
  }

}
