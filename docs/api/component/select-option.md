# selectOption(value:string)
Assumes component is a selectbox. Selects the option specified which value matches the argument.

## Usage

```typescript

import {Component, Input, Button, List, defaults, field} from "xenon";

class SearchPage extends Component {

  @field(Component, {css:".sorting-select"})
  sorting:Component

}

describe("search App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let searchPage:SearchPage = new SearchPage();
    searchPage.sorting.selectOption("Latest")
  })

})

```
