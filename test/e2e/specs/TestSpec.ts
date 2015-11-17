import {Component, Input, Button, List} from "../../../src/index";
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

class Message extends Component {

  @field(Component, {qa:"message--msg"})
  msg:Component;

  @field(Component, {qa:"message--user"})
  user:Component;

}

class ChatPage extends Component {

  @field(ChatForm)
  chatForm: ChatForm;

  @field(UserForm)
  userForm: UserForm;

  @field(Component, {css:"h4"})
  title: Component;

  @field(List, { qa:"messages", itemQA:"message", itemType:Message })
  messageList: List<Message>;

}

describe("example", () => {
  it("should pass", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();

    expect(chatPage.title.getText()).toBe("A simple chat system");

    expect(chatPage.userForm.username.isVisible()).toBe(true);
    chatPage.userForm.username.type("bob");
    chatPage.userForm.sendAction.click();
    expect(chatPage.userForm.isNotVisible()).toBe(true);
    expect(chatPage.chatForm.isVisible()).toBe(true);
    chatPage.chatForm.message.type("Hi everyone");
    chatPage.chatForm.sendAction.click();
    expect(chatPage.messageList.get(0).msg.getText()).toBe("Hi everyone");
    expect(chatPage.messageList.count()).toBe(1);
    expect(chatPage.messageList.getByText("Hi everyone").user.getText()).toBe("bob");
  })


})
