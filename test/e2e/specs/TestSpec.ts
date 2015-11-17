import {Component, Input, Button} from "../../../src/index";
import {QASelector,CSSSelector} from "../../../src/Selectors";

class ChatForm extends Component {

  message: Input;
  sendAction: Button;
  missingAction: Button;

  constructor () {
    super();
    this.message = new Input(this).qa("message")
    this.sendAction = new Button(this).css("#sendMessage")
    this.missingAction = new Button(this).css("#missingAction")
  }

}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    var chatForm:ChatForm = new ChatForm();
  })
})
