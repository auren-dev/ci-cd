"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hello_js_1 = __importDefault(require("./hello.js"));
const PORT = process.env?.PORT || 3000;
const app = (0, express_1.default)();
app.get('/health', (_req, res) => {
    res.status(200).send({ message: 'OK' });
});
app.get('/hello', (req, res) => {
    const name = req.query?.name?.toString() || 'Unknown';
    const result = hello_js_1.default.hello(name);
    res.json({ message: result });
});
app.get('/hi', (req, res) => {
    const name = req.query?.name?.toString() || 'Unknown';
    const result = hello_js_1.default.hi(name);
    res.json({ message: result });
});
app.get('/bye', (req, res) => {
    const name = req.query?.name?.toString() || 'Unknown';
    res.json({ message: `Bye, ${name}` });
});
app.listen(PORT, () => console.log(`🚀 API Server Started on :${PORT}`));
//# sourceMappingURL=app.js.map