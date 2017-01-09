"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Selector_1 = require("./Selector");
var protractor_1 = require("protractor");
var CSSIndexSelector = (function (_super) {
    __extends(CSSIndexSelector, _super);
    function CSSIndexSelector(value, index) {
        var _this = _super.call(this, value) || this;
        _this.value = value;
        _this.index = index;
        return _this;
    }
    CSSIndexSelector.prototype.toElement = function (element) {
        return element.all(protractor_1.By.css(this.value)).get(this.index);
    };
    return CSSIndexSelector;
}(Selector_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CSSIndexSelector;
//# sourceMappingURL=CSSIndexSelector.js.map