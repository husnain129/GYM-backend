import AppRouter from "../AppRouter";
import {
  getCompetitions,
  getOneCompetition,
  registerCompetition,
  updateCompetition,
} from "../controller/compitition.controller";

const router = AppRouter.getInstance();

router.route("/competition").post(registerCompetition);
router.route("/competition").get(getCompetitions);
router.route("/competition/:id").get(getOneCompetition);
router.route("/competition/:id").patch(updateCompetition);
