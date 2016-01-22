import { Selector } from "../selectors";
export interface ComponentClass<T extends Component> {
    create(component: Component, options: any): T;
    new (component: Component): T;
}
export default class Component {
    parent: Component;
    selector: Selector;
    private states;
    constructor(parent?: Component);
    static create(parent: any, options: any): void;
    private autoConstruct();
    private setMultiple(props);
    qa(qaString: any): Component;
    css(cssString: any): Component;
    setSelector(selector: Selector): Component;
    private getAncestors();
    getElement(): protractor.WebElementPromise;
    isDisplayed(): webdriver.promise.Promise<boolean>;
    scrollIntoView(): webdriver.promise.Promise<{}>;
    getText(): webdriver.promise.Promise<string>;
    selectOption(value: string): void;
    private isVisibleCheck(shouldBeVisible);
    isVisible(timeout?: number): webdriver.promise.Promise<boolean>;
    isNotVisible(timeout?: number): webdriver.promise.Promise<boolean>;
    click(): void;
    type(value: string): void;
    is(stateName: string): webdriver.promise.Promise<boolean>;
}
