import * as mongoose from "mongoose";

export const TestSchema = new mongoose.Schema(
  {
    name: { type: String },
    marks: { type: Number },
    duration: { type: Number },
  },
  {
    collection: "test",
  }
);

export const QuestionSchema = new mongoose.Schema(
  {
    question: { type: String },
    options: { type: Array, default: [] },
    answer: { type: String },
    isCorrect: { type: Boolean, default: false },
    marks: { type: Number, default: 10 },
  },
  {
    collection: "question",
  }
);

export interface Test {
  name: string;
  marks: number;
  duration: number;
}
export interface Question {
  question: string;
  options: string[];
  answer: string;
  isCorrect: boolean;
  marks?: number;
}
