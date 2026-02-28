import { Schema, model, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  createdAt: Date;
}

const jobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

export const Job = model<IJob>("Job", jobSchema);