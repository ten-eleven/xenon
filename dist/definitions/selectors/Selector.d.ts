export default class Selector {
    value: string;
    constructor(value: string);
    locatorCSS(): string;
    toLocator(): webdriver.Locator;
    toElement(element: protractor.ElementFinder): protractor.ElementFinder;
}
