import { Schema, model, Document, Types } from "mongoose";

export interface IApplication extends Document {
  jobId: Types.ObjectId;
  userId: Types.ObjectId;    
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
}

const applicationSchema = new Schema<IApplication>(
  {
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },
    userId: {                      
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    resumeLink: { type: String, required: true },
    coverNote: { type: String, required: true }
  },
  { timestamps: true }
);

export const Application = model<IApplication>(
  "Application",
  applicationSchema
);