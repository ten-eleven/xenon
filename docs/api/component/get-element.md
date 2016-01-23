# getElement()
Gets the protractor wrapped webdriver element

## Usage

```typescript
import {Component, field, defaults} from "xenon";

@defaults({css:"#app"})
class MyApp extends Component {
  @field(Component, {qa:"myButton"})
  saveButton:Component
}

it("access raw webdriver WebElement method", ()=> {
  let app = new MyApp()
  app.saveButton.getElement().getInnerHtml().then((innerHTML)=> {
    console.log(innerHTML)
  })
})

```
## Exposed [WebElement](https://angular.github.io/protractor/#/api?view=webdriver.WebElement) methods


- getRawId
- isElementPresent
- click
- sendKeys
- getTagName
- getCssValue
- getAttribute
- getText
- getSize
- getLocation
- isEnabled
- isSelected
- submit
- clear
- isDisplayed
- getOuterHtml
- getInnerHtml
