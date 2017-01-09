"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Selector_1 = require("./Selector");
var protractor_1 = require("protractor");
var CSSTextSelector = (function (_super) {
    __extends(CSSTextSelector, _super);
    function CSSTextSelector(value, text, exact) {
        var _this = _super.call(this, value) || this;
        _this.value = value;
        _this.text = text;
        _this.exact = exact;
        if (protractor_1.By["cssExactText"] == null) {
            protractor_1.By.addLocator('cssExactText', function (css, text, parent, root) {
                var e = parent || document;
                var elements = e.querySelectorAll(css);
                Array.prototype.filter.call(elements, function (element) {
                    var textMatch = function (element) {
                        return (element.textContent != null && element.textContent.trim() == text);
                    };
                    if (textMatch(element)) {
                        return element;
                    }
                    var children = element.querySelectorAll("*");
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var childElement = children_1[_i];
                        if (textMatch(childElement)) {
                            return element;
                        }
                    }
                });
            });
        }
        return _this;
    }
    CSSTextSelector.prototype.toElement = function (element) {
        if (this.exact) {
            return element.element(protractor_1.By["cssExactText"](this.value, this.text));
        }
        else {
            return element.element(protractor_1.By.cssContainingText(this.value, this.text));
        }
    };
    return CSSTextSelector;
}(Selector_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CSSTextSelector;
//# sourceMappingURL=CSSTextSelector.js.map