import express from "express";
import db from "./db";
const app = express();
app.use(express.json());

import("./router/enroll.router");
import("./router/competition.router");

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 80;
db()
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`App is running on PORT ${PORT}.`);
    });
  })
  .catch((err) => console.log(err));

export default app;
