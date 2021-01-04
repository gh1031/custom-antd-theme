"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var index_js_1 = __importDefault(require("../index.js"));
var lessContent = '';
var defaultVars = index_js_1.default();
Object.keys(defaultVars).forEach(function (key) {
    var value = defaultVars[key];
    if (value) {
        lessContent += key + ": " + value + ";\n";
    }
    else {
        console.warn("The key of " + key + " is empty?");
    }
});
fs_1.default.writeFileSync(path_1.join(process.cwd(), 'index.less'), lessContent);
console.log('🎉 Generate index.less successfully');
