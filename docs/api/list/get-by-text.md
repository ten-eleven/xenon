## getByText(text:string, exactTextMatch:boolean=true)
gets an item matching text. By default it finds an element which matches exactly. Supports partial matching by passing in false argument in `exactTextMatch`.

### Usage

```typescript
expect(chatPage.messageList.get(0).msg.getText()).toBe("Hi everyone");
let firstMessage = chatPage.messageList.getByText("Hi everyon", false)
expect(firstMessage.msg.getText()).toBe("Hi everyone");
```
