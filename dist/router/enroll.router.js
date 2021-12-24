"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppRouter_1 = __importDefault(require("../AppRouter"));
var enroll_controller_1 = require("../controller/enroll.controller");
var router = AppRouter_1.default.getInstance();
router.route("/").post(enroll_controller_1.registerEntroll);
router.route("/").get(enroll_controller_1.getEnrolls);
router.route("/:id").get(enroll_controller_1.getOneEnroll);
router.route("/:id").get(enroll_controller_1.updateEnroll);
//# sourceMappingURL=enroll.router.js.map