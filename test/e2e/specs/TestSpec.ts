import {Component, Input, Button} from "../../../src/index";
import {QASelector,CSSSelector} from "../../../src/Selectors";
import {qa, css, type} from "../../../src/ComponentAnnotations";

class ChatForm extends Component {

  @type(Input) @qa("message")
  message: Input;

  @type(Button) @css("#sendMessage")
  sendAction: Button;

  @type(Button) @css("#missingAction")
  missingAction: Button;

  // constructor () {
  //   super();
  //   this.message = new Input(this).qa("message")
  //   this.sendAction = new Button(this).css("#sendMessage")
  //   this.missingAction = new Button(this).css("#missingAction")
  //   console.log(this)
  // }

}

class UserForm extends Component {

  @type(Input) @qa("username")
  username: Input;
  @type(Button) @css("#send-action")
  sendAction: Button;

  // constructor () {
  //   super();
  //   this.username = new Input(this).qa("username")
  //   this.sendAction = new Button(this).css("#send-action")
  // }

}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    let chatForm:ChatForm = new ChatForm();
    let userForm:UserForm = new UserForm();
    expect(userForm.username.isVisible(5000)).toBe(true);
  })
})
