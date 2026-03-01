import mongoose, { Document, Schema } from "mongoose";

export interface IJob extends Document {
  title: string;
  image:string,
  company: string;
  location: string;
  description: string;
  category: mongoose.Types.ObjectId;
  jobType:string,
  price:number
}

const jobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    jobType:{type:String, required:true},
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price:{type:Number,required:true}
  },
  { timestamps: true }
);

export const Job = mongoose.model<IJob>("Job", jobSchema);