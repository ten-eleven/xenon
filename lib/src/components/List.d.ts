import { ComponentClass } from "./Component";
import Component from "./Component";
import { Selector } from "../selectors";
export default class List<T extends Component> extends Component {
    itemSelector: Selector;
    itemType: ComponentClass<T>;
    itemQA(value: string): void;
    itemCSS(value: string): void;
    get(index: number): T;
    count(): number;
    getByText(text: string, exactTextMatch?: boolean): T;
}
