# List Component
Allows you to manage a list of repeatable items such as todo items. Extends `Component` class.
Behaves like list generics, but for page objects.


## Example todo list
Imagine we have a typical to do app which contains a list of Todo items.
Each todo has a label and a checkbox.

```html
<div id="todo-app">
  <ul class="todo-items">
    <li class="todo-item">
      <span class="todo-label">Buy milk</span>
      <input class="todo-checkbox" type="checkbox" checked="checked">
    </li>
    <li class="todo-item">
      <span class="todo-label">Buy eggs</span>
      <input class="todo-checkbox" type="checkbox">
    </li>
    <li class="todo-item">
      <span class="todo-label">Do homework</span>
      <input class="todo-checkbox" type="checkbox">
    </li>
  </ul>
  <form>
    <input type="text" class="todo-input"/>
  </form>
</div>
```

## Todo list page objects
Xenon allows us to define a page object type per row, and use a List Component
which gives array like generics.

```typescript

import {Component, List, defaults, field} from "xenon";

class TodoItem extends Component {
  @field(Component, {css:".todo-label"})
  label:Component

  @field(Component, {css:".todo-checkbox"})
  checkbox:Component
}

@defaults({css:"#todo-app"})
class TodoApp extends Component {

  @field(List, {
    itemCSS:".todo-item",  //per row selector
    css:".todo-list",      //container selector
    itemType:TodoItem      //reference to pageObject type, can be Component also
  })
  todoItems:List<TodoItem>

  @field(Component, {css:".todo-input"})
  todoInputField:Component
}
```

## Testing the todo app
```typescript
describe("Chat App features", () => {
  it("general acceptance", () => {
    browser.get("http://localhost:3002")
    let todoApp:TodoApp = new TodoApp();

    //check todo items are visible
    expect(todoApp.todoItems.isVisible()).toBe(true)
    //use the count() method on List component
    expect(todoApp.todoItems.count()).toBe(3)

    //get the first item, xenon returns a TodoItem type
    let firstTodoItem = todoApp.todoItems.get(0)
    expect(firstTodoItem.isVisible()).toBe(true)
    expect(firstTodoItem.label.getText()).toEqual("Buy milk")
    expect(firstTodoItem.checkbox.getElement().isSelected()).toBe(true)

    //get the first item, xenon returns a TodoItem type
    let secondTodoItem = todoApp.todoItems.get(1)
    expect(secondTodoItem.label.getText()).toEqual("Buy eggs")
    expect(secondTodoItem.checkbox.getElement().isSelected()).toBe(false)

    //testing adding a todo
    todoApp.todoInputField.type("Wash dishes")
    todoApp.todoInputField.getElement().submit()

    expect(todoApp.todoItems.count()).toBe(4)
    expect(todoApp.todoItems.get(0).isVisible()).toBe(true)
    expect(todoApp.todoItems.get(0).label.getText()).toBe("Wash dishes")
    //make sure todo input field is reset
    expect(todoApp.todoInputField.getText()).toBe("")
  })

})

```

## Methods

* [count()](count.md)
* [getByText(text,partialMatch)](get-by-text.md)
* [get(index)](get.md)
