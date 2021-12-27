import { model, Schema } from "mongoose";
import { IEnroll } from "../types";

const EntrollSchema = new Schema(
  {
    name: String,
    age: Number,
    weight: String,
    email:String,
    service: {
      type: Number,
      default: 250,
    },
    trainer:String,
    message:String,
    
  },
  {
    timestamps: true,
  }
);

export default model<IEnroll>("Enroll", EntrollSchema);
