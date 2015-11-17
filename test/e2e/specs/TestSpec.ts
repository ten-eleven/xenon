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


  constructor (parent:Component) {
    super(parent);
    this.qa("chat-form");
    // this.message = new Input(this).qa("message");
    // this.sendAction = new Button(this).css("#sendMessage");
    // this.missingAction = new Button(this).css("#missingAction");
  }
}

class UserForm extends Component {

  @type(Input) @qa("username")
  username: Input;
  @type(Button) @qa("send-action")
  sendAction: Button;
  constructor (parent:Component) {
    super(parent);
    this.qa("user-form");
    // this.username = new Input(this).qa("username");
    // this.sendAction = new Button(this).css("#send-action");
  }

}

class ChatPage extends Component {

  @type(ChatForm)
  chatForm: ChatForm;

  @type(UserForm)
  userForm: UserForm;

  title: Component;

  // constructor () {
  //   super();
  //   this.chatForm = new ChatForm(this);
  //   this.userForm = new UserForm(this);
  // }
}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();
    expect(chatPage.userForm.username.isVisible(5000)).toBe(true);
    chatPage.userForm.username.typeValue("bob");
    chatPage.userForm.sendAction.click();
    expect(chatPage.userForm.isDisplayed()).toBe(false);
    expect(chatPage.chatForm.isVisible(5000)).toBe(true);
  })
})
