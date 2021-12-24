"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CompititionSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    weight: String,
    email: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("Compitition", CompititionSchema);
//# sourceMappingURL=compititionSchema.js.map