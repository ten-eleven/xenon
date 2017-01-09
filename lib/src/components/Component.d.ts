/// <reference types="selenium-webdriver" />
import { Selector } from "../selectors";
import { WebElementPromise } from 'protractor';
import * as webdriver from 'selenium-webdriver';
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
    qa(qaString: any): this;
    css(cssString: any): this;
    setSelector(selector: Selector): this;
    private getAncestors();
    getElement(): WebElementPromise;
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
