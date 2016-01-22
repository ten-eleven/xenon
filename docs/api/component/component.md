# Component API

## Usage

```typescript
@defaults({css:".message", states: Message.states})
class Message extends Component {

  @defaults({css:".chat-header"})
  class ChatHeader extends Component {

    @field(Component, {css:".title"})
    title:Component

  }

  class ChatPage extends Component {

    @field(ChatHeader)
    header:ChatHeader

    @field(Input, {css:".message"})
    chatbox:Input

    @field(Button, {css:".send-action"})
    submitChat:Button

  }

}
```

## Selectors
`qa` and `css` are only currently supported. `qa` works by an attribute in the element of `data-qa`. For example

```typescript
@field(Input, {qa:"input-message"})
chatbox:Input
```

would match the following input element

```html
  <input type="text" data-qa="input-message" />
```

## Methods
Any methods called on a component will traverse up their ancestors to get the locator path

  * [getText()](get-text.md)
  * [click()](click.md)
  * [isVisible(timeout)](is-visible.md)
  * [isNotVisible(timeout)](is-not-visible.md)
  * [is(state)](is.md)
  * [selectOption(optionText)](select-option.md)
