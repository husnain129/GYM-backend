import express from "express";
import AppRouter from "./AppRouter";
import cors from "cors";
const app = express();

app.use(cors())
app.use(express.json());

app.use(AppRouter.getInstance());
import("./router/competition.router");
import("./router/enroll.router");

const { connect } = require("mongoose");
var db = "mongodb://127.0.0.1/gymProject";
connect(db, { useNewUrlParser: true }).then(() => console.log("DB Connected"));

// db();
const PORT = 80;
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}.`);
});

export default app;
