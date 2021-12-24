import { model, Schema } from "mongoose";
import { ICompititon } from "../types";

const CompititionSchema = new Schema(
  {
    name: String,
    age: Number,
    weight: String,
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<ICompititon>("Compitition", CompititionSchema);
