"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var DB = "mongodb://localhost:27017/gymProject";
function db() {
    mongoose
        .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(function () { return console.log("DB connection successful!"); })
        .catch(function (err) { return console.log(err); });
}
exports.default = db;
//# sourceMappingURL=db.js.map