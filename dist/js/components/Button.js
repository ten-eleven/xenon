var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Component_1 = require("./Component");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(parent) {
        _super.call(this, parent);
    }
    return Button;
})(Component_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
