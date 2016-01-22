# List Component

Allows you to manage a list of repeatable items such as messages. Extends `Component` class.
Behaves like list generics, but for page objects

## Example Usage

```typescript

import {Component, Input, Button, List, defaults, field} from "xenon";

class Message extends Component {

  @field(Component, {css:".name"})
  name:Component

  @field(Component, {css:".message"})
  message:Component
}

class ChatPage extends Component {

  @field(ChatHeader)
  header:ChatHeader

  @field(Input, {css:".message"})
  chatbox:Input

  @field(Button, {css:".send-action"})
  submitChat:Button

  @field(List, {itemCSS:".message", css:".message-list", itemType:Message})
  messageList:List<Message>
}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();

    chatPage.chatbox.type("hello")
    chatPage.submitChat.click()
    expect(chatPage.messageList.isVisible()).toBe(true)

    expect(chatPage.messageList.count()).toBe(1)

    //Returns instance of Message
    let firstMessage = chatPage.messageList.get(0)

    //We can now check the name + message fields are correct
    expect(firstMessage.name.getText()).toBe("joe")
    expect(firstMessage.message.getText()).toBe("hello")
  })

})

```

## Methods

* [count()](count.md)
* [getByText(text,partialMatch)](get-by-text.md)
* [get(index)](get.md)
