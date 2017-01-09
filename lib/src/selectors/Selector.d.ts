import { ElementFinder } from 'protractor';
export default class Selector {
    value: string;
    constructor(value: string);
    locatorCSS(): string;
    toLocator(): any;
    toElement(element: ElementFinder): ElementFinder;
}
