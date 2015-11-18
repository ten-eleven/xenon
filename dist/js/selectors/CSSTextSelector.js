var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Selector_1 = require("./Selector");
var CSSTextSelector = (function (_super) {
    __extends(CSSTextSelector, _super);
    function CSSTextSelector(value, text, exact) {
        _super.call(this, value);
        this.value = value;
        this.text = text;
        this.exact = exact;
        if (By["cssExactText"] == null) {
            By.addLocator('cssExactText', function (css, text, parent, root) {
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
                    for (var _i = 0; _i < children.length; _i++) {
                        var childElement = children[_i];
                        if (textMatch(childElement)) {
                            return element;
                        }
                    }
                });
            });
        }
    }
    CSSTextSelector.prototype.toElement = function (element) {
        if (this.exact) {
            return element.element(By["cssExactText"](this.value, this.text));
        }
        else {
            return element.element(By.cssContainingText(this.value, this.text));
        }
    };
    return CSSTextSelector;
})(Selector_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CSSTextSelector;
