const mongoose = require("mongoose");
const DB = "mongodb://localhost:27017/gymProject";
let db = async () => {
  mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
export default db;
