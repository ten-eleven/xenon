var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Selector_1 = require("./Selector");
var QASelector = (function (_super) {
    __extends(QASelector, _super);
    function QASelector() {
        _super.apply(this, arguments);
    }
    QASelector.prototype.locatorCSS = function () {
        return "[data-qa=\"" + this.value + "\"]";
    };
    return QASelector;
})(Selector_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QASelector;
//# sourceMappingURL=QASelector.js.map