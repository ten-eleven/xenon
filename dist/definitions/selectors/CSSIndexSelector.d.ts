import Selector from "./Selector";
export default class CSSIndexSelector extends Selector {
    value: string;
    index: number;
    constructor(value: string, index: number);
    toElement(element: protractor.ElementFinder): protractor.ElementFinder;
}
