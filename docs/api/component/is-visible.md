# isVisible(timeout:number=5000)
Waits until component is visible. The test will continue to retry until visible or until the timeout. `isVisible` will check whether the element is in the DOM then scrolls down to the element's position and checks whether it is visible to the user.

## Usage

```typescript
import {Component, field, defaults} from "xenon";

@defaults({css:"#app"})
class MyApp extends Component {
  @field(Component, {css:".loader"})
  someLoader:Component
}

it("test loader shows up eventually", ()=> {
  let app = new MyApp()
  // wait for up to 3 seconds for the loader to appear
  expect(app.someLoader.isVisible(3000))
})

```
