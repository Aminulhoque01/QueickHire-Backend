import { Schema, model, Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  apply: Types.ObjectId;
  role: "ADMIN" | "USER";
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    apply: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER"
    }
     
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);