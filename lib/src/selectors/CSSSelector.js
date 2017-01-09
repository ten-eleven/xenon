"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Selector_1 = require("./Selector");
var CSSSelector = (function (_super) {
    __extends(CSSSelector, _super);
    function CSSSelector() {
        return _super.apply(this, arguments) || this;
    }
    CSSSelector.prototype.locatorCSS = function () {
        return this.value;
    };
    return CSSSelector;
}(Selector_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CSSSelector;
//# sourceMappingURL=CSSSelector.js.map