
export class Component {
  constructor(parent:Component) {

  }
}

export class Input extends Component {
  constructor(parent:Component, selector:Selector) {
    super(parent);
  }
}

export class Button extends Component {
  constructor(parent:Component, selector:Selector) {
    super(parent);
  }
}

class Selector {

}

export class QASelector extends Selector {
  constructor(qaSelector:String) {
  }
}

export class CSSSelector extends Selector {
  constructor(qaSelector:String) {
  }
}
