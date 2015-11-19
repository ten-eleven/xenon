var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Selector_1 = require("./Selector");
var CSSIndexSelector = (function (_super) {
    __extends(CSSIndexSelector, _super);
    function CSSIndexSelector(value, index) {
        _super.call(this, value);
        this.value = value;
        this.index = index;
    }
    CSSIndexSelector.prototype.toElement = function (element) {
        return element.all(By.css(this.value)).get(this.index);
    };
    return CSSIndexSelector;
})(Selector_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CSSIndexSelector;
//# sourceMappingURL=CSSIndexSelector.js.map