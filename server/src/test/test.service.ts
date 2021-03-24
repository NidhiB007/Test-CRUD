import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Question, Test } from "./test.model";

@Injectable()
export class TestService {
  constructor(
    @InjectModel("Test") private readonly testModel: Model<any>,
    @InjectModel("Question") private readonly questionModel: Model<any>
  ) {}
  tests: Test[] = [];
  questions: Question[] = [
    {
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
      marks: 10,
    },
    {
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
      marks: 10,
    },
    {
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
      marks: 10,
    },
    {
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
      marks: 10,
    },
    {
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
      marks: 10,
    },
    {
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
      marks: 10,
    },
    {
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
      marks: 10,
    },
    {
      question: "which option best describes your job role?",
      options: [
        "Small Business Owner or Employee",
        "Nonprofit Owner or Employee",
        "Journalist or Activist",
        "Other",
      ],
      answer: "Other",
      isCorrect: null,
      marks: 10,
    },
  ];

  async getTests() {
    const tests = await this.testModel.find().exec();
    return { status: "SUCCESS", data: tests };
  }

  async saveTest(query: Test) {
    const newTest = new this.testModel(query);
    await newTest.save();
    return { status: "SUCCESS", data: newTest };
  }

  async addQuestions() {}

  async getQuestions() {
    let questions = await this.questionModel.find().exec();
    if (questions.length === 0) {
      await this.questionModel.create(this.questions);
      questions = await this.questionModel.find().exec();
    }
    return { status: "SUCCESS", data: questions };
  }
}
