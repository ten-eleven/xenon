# First Xenon Component

Now we need to create xenon objects to encapulate a component's elements. We start by creating a `ChatHeader` xenon object which has a field `title`. In our E2E's we do `expect(chatPage.header.title.text()).toBe("my chat")`. This will use the css path `.chat-header .title` for element. We have inlined the `ChatHeader` class in the test but this can live elsewhere and be imported into the spec.

```typescript

import {Component, List, defaults, field} from "xenon";

@defaults({css:".chat-header"})
class ChatHeader extends Component {

  @field(Component, {css:".title"})
  title:Component

}

class ChatPage extends Component {

  @field(ChatHeader)
  header:ChatHeader

  @field(Component, {css:".message"})
  chatbox:Component

  @field(Component, {css:".send-action"})
  submitChat:Component

}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();

    expect(chatPage.header.isVisible()).toBe(true)
    expect(chatPage.header.title.text()).toBe("my chat")
    chatPage.chatbox.type("hello")
    chatPage.submitChat.click()

  })

})

```

## Reusable Xenon Components
`ChatHeader` may be reused in other parts of the page so we need to change the locator. Here we added an method `id` which builds the css locator by calling `this.css(selector)`.   

```typescript

import {Component, List, defaults, field} from "xenon";

@defaults({css:".chat-header"})
class ChatHeader extends Component {

  @field(Component, {css:".title"})
  title:Component

  id(id:string) {
    this.css(".header--"+id);
  }

}

class ChatPage extends Component {

  @field(ChatHeader, {id:"header"})
  header:ChatHeader

  @field(ChatHeader, {id:"second-header"})
  secondHeader:ChatHeader

  @field(Component, {css:".message"})
  chatbox:Component

  @field(Component, {css:".send-action"})
  submitChat:Component

}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();

    expect(chatPage.header.isVisible()).toBe(true)
    expect(chatPage.header.title.text()).toBe("my chat")

    expect(chatPage.secondHeader.isVisible()).toBe(true)
    expect(chatPage.secondHeader.title.getText()).toBe("my second header")

    chatPage.chatbox.type("hello")
    chatPage.submitChat.click()

  })

})

```

## Custom methods
You can create custom methods on xenon components. We have refactored the above example with `sendMessage(message)` method.

```typescript

import {Component, List, defaults, field} from "xenon";

@defaults({css:".chat-header"})
class ChatHeader extends Component {

  @field(Component, {css:".title"})
  title:Component

  id(id:string) {
    this.css(".header--"+id);
  }

}

class ChatPage extends Component {

  @field(ChatHeader, {id:"header"})
  header:ChatHeader

  @field(ChatHeader, {id:"second-header"})
  secondHeader:ChatHeader

  @field(Component, {css:".message"})
  chatbox:Component

  @field(Component, {css:".send-action"})
  submitChat:Component

  sendMessage(message:string) {
    this.chatbox.type(message)
    this.submitChat.click()
  }

}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();

    expect(chatPage.header.isVisible()).toBe(true)
    expect(chatPage.header.title.text()).toBe("my chat")

    expect(chatPage.secondHeader.isVisible()).toBe(true)
    expect(chatPage.secondHeader.title.getText()).toBe("my second header")

    chatPage.sendMessage("hello")

  })

})

```
