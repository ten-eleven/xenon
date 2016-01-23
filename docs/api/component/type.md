# type(value:string)
Types text into an input field

## Usage

```typescript
import {Component, field, defaults} from "xenon";

@defaults({css:"#app"})
class MyApp extends Component {
  @field(Component, {css:".search"})
  search:Component
}

it("test text of the header", ()=> {
  let app = new MyApp()
  app.search.type("Penguins...")
  expect(app.search.getText()).toEqual("Penguins...")
})

```
