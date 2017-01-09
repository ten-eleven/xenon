"use strict";
var initBuilder = function (target, propKey) {
    target._builders = target._builders || {};
    target._builders[propKey] = target._builders[propKey] || {};
    return target._builders[propKey];
};
function field(componentClass, options) {
    if (options === void 0) { options = {}; }
    return function (target, propKey) {
        var annotation = initBuilder(target, propKey);
        annotation.type = componentClass;
        annotation.setters = options;
    };
}
exports.field = field;
function defaults(options) {
    return function (target) {
        target.prototype.defaults = options;
    };
}
exports.defaults = defaults;
//# sourceMappingURL=ComponentAnnotations.js.map