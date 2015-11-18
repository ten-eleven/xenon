var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Component_1 = require("./Component");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(parent) {
        _super.call(this, parent);
    }
    Input.prototype.type = function (value) {
        this.getElement().clear();
        this.getElement().sendKeys(value);
    };
    return Input;
})(Component_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;
//# sourceMappingURL=Input.js.map