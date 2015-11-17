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

  constructor (parent:Component) {
    super(parent);
    this.qa("chat-form");
    this.message = new Input(this).qa("message");
    this.sendAction = new Button(this).css("#sendMessage");
    this.missingAction = new Button(this).css("#missingAction");
  }

}

class UserForm extends Component {

  username: Input;
  sendAction: Button;

  constructor (parent:Component) {
    super(parent);
    this.qa("user-form");
    this.username = new Input(this).qa("username");
    this.sendAction = new Button(this).css("#send-action");
  }

}

class ChatPage extends Component {
  chatForm: ChatForm;
  userForm: UserForm;
  title: Component;

  constructor () {
    super();
    this.chatForm = new ChatForm(this);
    this.userForm = new UserForm(this);
  }
}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();
    expect(chatPage.userForm.username.isVisible(5000)).toBe(true);
    chatPage.userForm.username.type("bob");
    chatPage.userForm.sendAction.click();
    expect(chatPage.userForm.isDisplayed()).toBe(false);
    expect(chatPage.chatForm.isVisible(5000)).toBe(true);
  })
})
