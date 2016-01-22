# getText()
Gets the text content from component.

```typescript
import {Component, field, defaults} from "xenon";

@defaults({css:"#app"})
class MyApp extends Component {
  @field(Component, {css:".title"})
  title:Component
}

it("test text of the header", ()=> {
  let app = new MyApp()
  expect(app.title.getText()).toEqual("Hello World")
})

```
