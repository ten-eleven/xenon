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
  }

}

class ChatPage extends Component {

  @type(ChatForm)
  chatForm: ChatForm;

  @type(UserForm)
  userForm: UserForm;

  @type(Button) @css("h4")
  title: Component;

}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();

    expect(chatPage.title.getText()).toBe("A simple chat system");

    expect(chatPage.userForm.username.isVisible()).toBe(true);
    chatPage.userForm.username.typeValue("bob");
    chatPage.userForm.sendAction.click();
    expect(chatPage.userForm.isNotVisible()).toBe(true);
    expect(chatPage.chatForm.isVisible()).toBe(true);
  })


})
