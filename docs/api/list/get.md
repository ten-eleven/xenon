# get(index:number)
gets an item by index. Returns the `itemType` specified in the `@field` or `@default` annotations

## Usage

```typescript
expect(chatPage.messageList.get(0).msg.getText()).toBe("Hi everyone");
```
