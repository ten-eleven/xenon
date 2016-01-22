# is(state)
Verifies the component's state by mapping a key to a classname

## Usage

```typescript

@defaults({states:Message.states})
class Message extends Component {

  public static states = {
    LATEST: "latest"
  }

}

class ChatPage extends Component {
  public static states = {
    VALID:"ng-valid"
  }
  @field(List, {css:".messagelist", itemCSS:".message", itemType:Message})
  messageList:List<Message>

  @field(Component, {css:"#name", states:ChatPage.states})
  inputField:Component

}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();
    expect(chatPage.messageList.get(0).is(Message.states.LATEST)).toBe(true)

    //example with angular classes
    expect(chatPage.inputField.is(ChatPage.states.VALID)).toBe(true)
  })
})
```
