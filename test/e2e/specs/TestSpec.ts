import {Component, Input, Button} from "../../../src/index";
import {QASelector,CSSSelector} from "../../../src/Selectors";
import {qa, css} from "../../../src/SelectorAnnotations";

class ChatForm extends Component {

  @qa("message")
  message: Input;

  @css("#sendMessage")
  sendAction: Button;

  @css("#missingAction")
  missingAction: Button;

  constructor () {
    super();
    this.message = new Input(this).qa("message")
    this.sendAction = new Button(this).css("#sendMessage")
    this.missingAction = new Button(this).css("#missingAction")
    console.log(this)
  }

}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    var chatForm:ChatForm = new ChatForm();
    console.log(ChatForm.prototype)
    // console.log(chatForm.message.getElement())
  })
})
