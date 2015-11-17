import {Component, Input, Button, QASelector, CSSSelector} from "../../../src/index";

class ChatForm extends Component {

  message: Input;
  sendAction: Button;
  missingAction: Button;

  constructor () {
    super();
    this.message = new Input(this, new QASelector("message"))
    this.sendAction = new Button(this, new CSSSelector("#sendMessage"));
    this.missingAction = new Button(this, new CSSSelector("#missingAction"));
  }

}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    var chatForm:ChatForm = new ChatForm();
  })
})
