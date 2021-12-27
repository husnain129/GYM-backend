"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var EntrollSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    weight: String,
    email: String,
    service: {
        type: Number,
        default: 250,
    },
    trainer: String,
    message: String,
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Enroll", EntrollSchema);
//# sourceMappingURL=enrollSchema.js.map