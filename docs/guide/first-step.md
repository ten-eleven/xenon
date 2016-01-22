# First Test

Create a new spec in `.ts` and import the xenon framework.

```typescript

import {Component, List, defaults, field} from "xenon";

class ChatPage extends Component {



}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();
  })

})

```

## Adding fields
Fields are elements on the page for example a title, an action or an input. See Component API. See below

```typescript

import {Component, List, defaults, field} from "xenon";

class ChatPage extends Component {

  @field(Component, {css:".title"})
  title:Component

  @field(Component, {css:".message"})
  chatbox:Component

  @field(Component, {css:".send-action"})
  submitChat:Component

}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();

    expect(chatPage.title.getText()).toBe("my chat")
    chatPage.input.type("hello")
    chatPage.submitChat.click()

  })

})

```
