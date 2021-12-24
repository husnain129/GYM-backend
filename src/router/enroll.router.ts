import AppRouter from "../AppRouter";
import {
  getEnrolls,
  getOneEnroll,
  registerEntroll,
  updateEnroll,
} from "../controller/enroll.controller";

const router = AppRouter.getInstance();

router.route("/enroll").post(registerEntroll);
router.route("/enroll").get(getEnrolls);
router.route("/enroll/:id").get(getOneEnroll);
router.route("/enroll/:id").patch(updateEnroll);
