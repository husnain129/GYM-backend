"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppRouter_1 = __importDefault(require("../AppRouter"));
var compitition_controller_1 = require("../controller/compitition.controller");
var router = AppRouter_1.default.getInstance();
router.route("/competition").post(compitition_controller_1.registerCompetition);
router.route("/competition").get(compitition_controller_1.getCompetitions);
router.route("/competition/:id").get(compitition_controller_1.getOneCompetition);
router.route("/competition/:id").patch(compitition_controller_1.updateCompetition);
//# sourceMappingURL=competition.router.js.map