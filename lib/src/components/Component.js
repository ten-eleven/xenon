var selectors_1 = require("../selectors");
var Component = (function () {
    function Component(parent) {
        this.parent = parent;
        this.autoConstruct();
    }
    Component.create = function (parent, options) {
        return new this(parent).setMultiple(options);
    };
    Component.prototype.autoConstruct = function () {
        var builders, defaults;
        if (builders = this.constructor.prototype._builders) {
            for (var k in builders) {
                var def = builders[k];
                var component = this[k] = new (def.type || Component)(this);
                component.setMultiple(def.setters);
            }
        }
        if (defaults = this.constructor.prototype.defaults) {
            this.setMultiple(defaults);
        }
    };
    Component.prototype.setMultiple = function (props) {
        for (var k in props) {
            if (typeof this[k] === 'function') {
                this[k](props[k]);
            }
            else {
                this[k] = props[k];
            }
        }
    };
    Component.prototype.qa = function (qaString) {
        return this.setSelector(new selectors_1.QASelector(qaString));
    };
    Component.prototype.css = function (cssString) {
        return this.setSelector(new selectors_1.CSSSelector(cssString));
    };
    Component.prototype.setSelector = function (selector) {
        this.selector = selector;
        return this;
    };
    Component.prototype.getAncestors = function () {
        var ancestors = this.parent ? this.parent.getAncestors() : [];
        return ancestors.concat([this]);
    };
    Component.prototype.getElement = function () {
        var ancestors = this.getAncestors();
        var reducer = function (currentElement, component) {
            if (component.selector) {
                return component.selector.toElement(currentElement);
            }
            else {
                return currentElement;
            }
        };
        var nullElement = { element: browser.element };
        return ancestors.reduce(reducer, nullElement);
    };
    Component.prototype.isDisplayed = function () {
        return this.getElement().isDisplayed();
    };
    Component.prototype.scrollIntoView = function () {
        var scrollIntoView = function (element) {
            element.scrollIntoView(true);
        };
        // get around the outofdate def file by using any type
        var element = this.getElement();
        return browser.executeScript(scrollIntoView, element.getWebElement());
    };
    Component.prototype.getText = function () {
        return this.getElement().getText();
    };
    Component.prototype.selectOption = function (value) {
        var selectList = this.getElement();
        selectList.click();
        var desiredOption = null;
        selectList
            .all(By.css("option"))
            .then(function (options) {
            protractor.promise.fullyResolved(options.map(function (option) {
                option
                    .getText()
                    .then(function (t) {
                    if (value == t) {
                        desiredOption = option;
                    }
                    return true;
                });
            }));
        })
            .then(function () {
            if (desiredOption) {
                desiredOption.click();
            }
        });
    };
    Component.prototype.isVisibleCheck = function (shouldBeVisible) {
        var _this = this;
        return function () {
            var self = _this;
            return browser.isElementPresent(self.getElement())
                .then(function (isPresent) {
                if (isPresent) {
                    return self.scrollIntoView().then(function () {
                        return self.getElement().isDisplayed().then(function (isDisplayed) {
                            return isDisplayed === shouldBeVisible;
                        });
                    });
                }
                ;
                return false === shouldBeVisible;
            });
        };
    };
    Component.prototype.isVisible = function (timeout) {
        if (timeout === void 0) { timeout = 5000; }
        return browser.wait(this.isVisibleCheck(true), timeout);
    };
    Component.prototype.isNotVisible = function (timeout) {
        if (timeout === void 0) { timeout = 5000; }
        return browser.wait(this.isVisibleCheck(false), timeout);
    };
    Component.prototype.click = function () {
        this.getElement().click();
    };
    Component.prototype.type = function (value) {
        this.getElement().clear();
        this.getElement().sendKeys(value);
    };
    Component.prototype.is = function (stateName) {
        var stateValue = this.states[stateName];
        return this.getElement().getAttribute("class").then(function (classNames) {
            var classNamesArray = classNames.split(" ");
            return !!(classNamesArray.indexOf(stateValue));
        });
    };
    return Component;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
//# sourceMappingURL=Component.js.map