"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var isPlainObject = function (obj) { return ({}).toString.call(obj) === '[object Object]'; };
function generateVars(vars) {
    var themes = {
        // colors
        '@primary-color': '',
        '@info-color': '',
        '@success-color': '',
        '@processing-color': '',
        '@error-color': '',
        '@highlight-color': '',
        '@warning-color': '',
        // border-radius
        '@border-radius-base': '4px',
        // width & height
        '@height-base': '28px',
    };
    if (vars && isPlainObject(vars)) {
        themes = __assign(__assign({}, themes), vars);
    }
    return themes;
}
exports.default = generateVars;
