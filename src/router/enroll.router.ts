import AppRouter from "../AppRouter";
import {
  getEnrolls,
  getOneEnroll,
  registerEntroll,
  updateEnroll,
} from "../controller/enroll.controller";

const router = AppRouter.getInstance();

router.route("/").post(registerEntroll);
router.route("/").get(getEnrolls);
router.route("/:id").get(getOneEnroll);
router.route("/:id").get(updateEnroll);
