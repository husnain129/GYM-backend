const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/gymProject";

function db() {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"))
    .catch((err: any) => console.log(err));
}
export default db;
