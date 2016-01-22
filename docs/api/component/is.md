# is():boolean
Verifies the component's state.

## Usage

```typescript

@defaults({states:Message.states})
class Message extends Component {

  public static states = {
    LATEST: "latest"
  }

}

class ChatPage extends Component {

  @field(List, {css:".messagelist", itemCSS:".message", itemType:Message})
  messageList:List<Message>

}

describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let chatPage:ChatPage = new ChatPage();
    chatPage.messageList.get(0).is(Message.states.LATEST)
  })
})
```
