var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Component_1 = require("./Component");
var selectors_1 = require("../selectors");
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        _super.apply(this, arguments);
    }
    List.prototype.itemQA = function (value) {
        this.itemSelector = new selectors_1.QASelector(value);
    };
    List.prototype.itemCSS = function (value) {
        this.itemSelector = new selectors_1.CSSSelector(value);
    };
    List.prototype.get = function (index) {
        var selector = new selectors_1.CSSIndexSelector(this.itemSelector.locatorCSS(), index);
        var componentType = new this.itemType(this).setSelector(selector);
        return componentType;
    };
    List.prototype.count = function () {
        var elem = this.getElement();
        return elem.all(this.itemSelector.toLocator()).count();
    };
    List.prototype.getByText = function (text, exactTextMatch) {
        if (exactTextMatch === void 0) { exactTextMatch = true; }
        var selector = new selectors_1.CSSTextSelector(this.itemSelector.locatorCSS(), text, exactTextMatch);
        var componentType = new this.itemType(this).setSelector(selector);
        return componentType;
    };
    return List;
})(Component_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = List;
