import {Component, Input, Button} from "../../../src/index";
import {QASelector,CSSSelector} from "../../../src/Selectors";
import {defaults, field} from "../../../src/ComponentAnnotations";

@defaults({qa:"chat-form"})
class ChatForm extends Component {

  @field(Input, {qa:"message"})
  message: Input;

  @field(Button, {css:"#sendMessage"})
  sendAction: Button;

  @field(Button, {css:"#missingAction"})
  missingAction: Button;

}

@defaults({qa:"user-form"})
class UserForm extends Component {

  @field(Input, {qa:"username"})
  username: Input;

  @field(Button, {qa:"send-action"})
  sendAction: Button;

}

class ChatPage extends Component {

  @field(ChatForm)
  chatForm: ChatForm;

  @field(UserForm)
  userForm: UserForm;

  @field(Component)
  title: Component;

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
