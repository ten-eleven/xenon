# Nested Xenon Components
Xenon components are composite, meaning that you can nested components as deep as you wish to model your application

Another powerful feature of this nesting is the selectors get chained automatically with parent component selectors.


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
  feedbackModal:Componetn
}

```

### Example e2e test
Below shows how clean the api is without having to namespace our code, e.g.

```typescript
// generated protractor element selectors
// #app .login .title
app.loginModal.title.getText()
```

```typescript
describe("Test modals", () => {
  it("login Modal + feedback modal", () => {
    browser.get("http://localhost:3002")
    let app:MyApp = new MyApp();    
    expect(app.loginModal.title.getText()).toEqual("Login")

    expect(app.feedbackModal.title.getText()).toEqual("Please give your feedback")
    app.feedbackModal.closeButton.click()
    expect(app.feedbackModal.isVisible()).toBe(false)
  })

})
```
