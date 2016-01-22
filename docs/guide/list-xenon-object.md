# List Xenon Component
Next we have have a component which has a list of repeatable elements like a message list or list of options. Xenon provides helpful methods to manage these situations.

We start by adding to our tests a `messageList` field.

```typescript

import {Component, List, defaults, field} from "xenon";

class ChatPage extends Component {

  @field(ChatHeader)
  header:ChatHeader

  @field(Component, {css:".message"})
  chatbox:Component

  @field(Component, {css:".send-action"})
  submitChat:Component

  @field(List, {itemCSS:".message", css:".message-list", itemType:Component})
  messageList:List<Component>
}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();

    chatPage.chatbox.type("hello")
    chatPage.submitChat.click()
    expect(chatPage.messageList.isVisible()).toBe(true)

    expect(chatPage.messageList.count()).toBe(1)
    expect(chatPage.messageList.get(0).getText()).toBe("hello")
  })

})

```

## Custom xenon list components

If the message is more of a complicated component, then you can create a xenon object and use that as itemType.

```typescript

import {Component,  List, defaults, field} from "xenon";

class Message extends Component {

  @field(Component, {css:".name"})
  name:Component

  @field(Component, {css:".message"})
  message:Component
}

class ChatPage extends Component {

  @field(ChatHeader)
  header:ChatHeader

  @field(Component, {css:".message"})
  chatbox:Component

  @field(Component, {css:".send-action"})
  submitChat:Component

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
    expect(chatPage.messageList.get(0).message.getText()).toBe("hello")
    expect(chatPage.messageList.get(0).joe.getText()).toBe("joe")
  })

})

```
