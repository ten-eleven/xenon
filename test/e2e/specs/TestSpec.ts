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

class UserForm extends Component {

  username: Input;
  sendAction: Button;

  constructor () {
    super();
    this.username = new Input(this).qa("username")
    this.sendAction = new Button(this).css("#send-action")
  }

}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    let chatForm:ChatForm = new ChatForm();
    let userForm:UserForm = new UserForm();
    expect(userForm.username.isVisible(5000)).toBe(true);
  })
})
