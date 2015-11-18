import {Component, Input, Button, List} from "../../../src/index";
import {defaults, field} from "../../../src/ComponentAnnotations";

@defaults({qa:"chat-form"})
class ChatForm extends Component {

  @field(Input, {qa:"message"})
  message: Input;

  @field(Button, {css:"#sendMessage"})
  sendAction: Button;

  @field(Button, {css:"#missingAction"})
  missingAction: Button;

  sendMessage(message:string):void {
    this.message.type(message);
    this.sendAction.click();
  }

}

@defaults({qa:"user-form"})
class UserForm extends Component {

  @field(Input, {qa:"username"})
  username: Input;

  @field(Button, {qa:"send-action"})
  sendAction: Button;

  login(name:string) {
    this.username.type(name);
    this.sendAction.click();
  }

}

class Message extends Component {

  @field(Component, {qa:"message--msg"})
  msg:Component;

  @field(Component, {qa:"message--user"})
  user:Component;

}

class ChatPage extends Component {

  @field(Component, {qa:"options--select"})
  menu: Component;

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

    let firstMessage = chatPage.messageList.getByText("Hi everyon", false);
    expect(firstMessage.user.getText()).toBe("bob");
    expect(firstMessage.msg.getText()).toBe("Hi everyone");

    chatPage.chatForm.sendMessage("new reply 2");
    expect(chatPage.messageList.count()).toBe(2);

    let secondMessage = chatPage.messageList.get(1);
    expect(secondMessage.user.getText()).toBe("bob");

    chatPage.menu.selectOption("clear messages")
    expect(chatPage.messageList.count()).toBe(0);

    chatPage.menu.selectOption("logout");
    chatPage.userForm.login("joe");
    chatPage.chatForm.sendMessage("new reply");
    expect(chatPage.messageList.get(0).user.getText()).toBe("joe");

  })


})
