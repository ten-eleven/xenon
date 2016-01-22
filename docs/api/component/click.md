# click()
Gets the text content from component.

```typescript
import {Component, field, defaults} from "xenon";

@defaults({css:"#app"})
class MyApp extends Component {
  @field(Component, {qa:"myButton"})
  saveButton:Component
}

it("click the save button", ()=> {
  let app = new MyApp()
  expect(app.saveButton.click())
})

```
