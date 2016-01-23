# getText()
Gets the text content from component. Also supports input and textarea elements.

## Usage

```typescript
import {Component, field, defaults} from "xenon";

@defaults({css:"#app"})
class MyApp extends Component {
  @field(Component, {css:".title"})
  title:Component

  @field(Component, {css:"input"})
  textInput:Component
}

it("test text of the header", ()=> {
  let app = new MyApp()
  expect(app.title.getText()).toEqual("Hello World")
  app.textInput.type("hello")
  expect(app.textInput.getText()).toBe("hello")
})

```
