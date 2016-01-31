# Nested Xenon Components
Xenon components are composite, meaning that you can nested components as deep as you wish to model your application

Another powerful feature of this nesting is that selectors get chained automatically with parent component selectors.


## Modal Example
Imagine we have a modal component which produces the following html, with xenon we can use generic classNames
like `modal-title` rather than prefixing like `login-modal-title` for namespacing.

### Modal html output
```html
<div class="modal login">
  <h2 class="modal-title">Login<button class="modal-close">Close</button></h2>
  <div class="modal-content">
    //login form stuff
  </div>
</div>

<div class="modal feedback">
  <h2 class="modal-title">Please give your feedback<button class="modal-close">Close</button></h2>
  <div class="modal-content">
    //feedback form stuff
  </div>
</div>
```

### Modal page objects with xenon

```typescript
import {Component, List, defaults, field} from "xenon";

class Modal extends Component {

  @field(Component, {css:".modal-title"})
  title:Component

  @field(Component, {css:".modal-close"})
  closeButton:Component

  @field(Component, {css:".modal-content"})
  content:Component

}

@defaults({css:"#app"})
class MyApp extends Component {
  @field(Modal, {css:".login"})
  loginModal:Component

  @field(Modal, {css:".feedback"})
  feedbackModal:Component
}

```

### Example e2e test
Below shows an example test with the chained selectors that xenon creates.

```typescript
describe("Test modals", () => {
  it("login Modal + feedback modal", () => {
    browser.get("http://localhost:3002")
    let app:MyApp = new MyApp();    

    //css=#app .login .modal-title
    expect(app.loginModal.title.getText()).toEqual("Login")

    //css=#app .feedback .modal-title
    expect(app.feedbackModal.title.getText()).toEqual("Please give your feedback")

    //css=#app .feedback .modal-close
    app.feedbackModal.closeButton.click()

    //css=#app .feedback
    expect(app.feedbackModal.isVisible()).toBe(false)
  })

})
```
