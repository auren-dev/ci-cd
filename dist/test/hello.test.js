"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const hello_1 = __importDefault(require("../src/hello"));
(0, globals_1.describe)('[Hello]', () => {
    (0, globals_1.test)('✅ With Query String', () => {
        const name = 'kimcode';
        const result = hello_1.default.hello(name);
        (0, globals_1.expect)(result).toEqual(`👋🏻 Hello, ${name}!`);
    });
    (0, globals_1.test)('❌ Without Query String', () => {
        const name = 'Unknown';
        const result = hello_1.default.hello(name);
        (0, globals_1.expect)(result).toEqual(`👋🏻 Hello, Unknown!`);
    });
});
//# sourceMappingURL=hello.test.js.map