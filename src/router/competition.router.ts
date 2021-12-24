import AppRouter from "../AppRouter";
import {
  getCompetitions,
  getOneCompetition,
  registerCompetition,
  updateCompetition,
} from "../controller/compitition.controller";

const router = AppRouter.getInstance();

router.route("/").post(registerCompetition);
router.route("/").get(getCompetitions);
router.route("/:id").get(getOneCompetition);
router.route("/:id").get(updateCompetition);
