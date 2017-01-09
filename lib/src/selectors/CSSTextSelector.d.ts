import Selector from "./Selector";
import { ElementFinder } from 'protractor';
export default class CSSTextSelector extends Selector {
    value: string;
    text: string;
    exact: boolean;
    constructor(value: string, text: string, exact: boolean);
    toElement(element: ElementFinder): ElementFinder;
}
