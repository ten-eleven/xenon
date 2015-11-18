var Selector = (function () {
    function Selector(value) {
        this.value = value;
    }
    Selector.prototype.locatorCSS = function () {
        return "";
    };
    Selector.prototype.toLocator = function () {
        return By.css(this.locatorCSS());
    };
    Selector.prototype.toElement = function (element) {
        return element.element(this.toLocator());
    };
    return Selector;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Selector;
