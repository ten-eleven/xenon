# isNotVisible(timeout:number=5000)
Waits until component is not visible. The test will continue to retry until not visible or until the timeout.


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
