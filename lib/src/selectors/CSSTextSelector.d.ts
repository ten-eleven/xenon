import Selector from "./Selector";
export default class CSSTextSelector extends Selector {
    value: string;
    text: string;
    exact: boolean;
    constructor(value: string, text: string, exact: boolean);
    toElement(element: protractor.ElementFinder): protractor.ElementFinder;
}
