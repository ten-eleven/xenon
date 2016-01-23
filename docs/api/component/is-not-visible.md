# isNotVisible(timeout:number=5000)
Waits until component is not visible. The test will continue to retry until component is not visible or until the timeout. Test fails if passes the timeout. `isNotVisible` would be true if the element exists in the DOM but not visible to the user.


```typescript
import {Component, field, defaults} from "xenon";

@defaults({css:"#app"})
class MyApp extends Component {
  @field(Component, {css:".progress"})
  progressBar:Component
}

it("test that eventually progress bar is not visible", ()=> {
  let app = new MyApp()
  // wait for up to 3 seconds for the progress to not show
  expect(app.someLoader.isNotVisible(3000))
})

```
