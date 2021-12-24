"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./db"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
Promise.resolve().then(function () { return __importStar(require("./router/enroll.router")); });
Promise.resolve().then(function () { return __importStar(require("./router/competition.router")); });
app.get("/", function (req, res) {
    res.send("hello world");
});
var PORT = 80;
(0, db_1.default)()
    .then(function () {
    console.log("DB connected");
    app.listen(PORT, function () {
        console.log("App is running on PORT " + PORT + ".");
    });
})
    .catch(function (err) { return console.log(err); });
exports.default = app;
//# sourceMappingURL=index.js.map