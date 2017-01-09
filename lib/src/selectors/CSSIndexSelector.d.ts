import Selector from "./Selector";
import { ElementFinder } from 'protractor';
export default class CSSIndexSelector extends Selector {
    value: string;
    index: number;
    constructor(value: string, index: number);
    toElement(element: ElementFinder): ElementFinder;
}
