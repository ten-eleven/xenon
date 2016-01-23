# Component
Component is the main base class for a component in xenon, and can be used for the majority of components

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

    @field(Component, {css:".message"})
    chatbox:Component

    @field(Component, {css:".send-action"})
    submitChat:Component

  }

}
```

## Selectors
`qa` and `css` are only currently supported. `qa` matches elements using `data-qa` attribute value. For example

```typescript
@field(Component, {qa:"input-message"})
chatbox:Component
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
