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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
    console.log("tests", tests);

    return { status: "SUCCESS", data: tests };
  }

  async saveTest(query: Test) {
    this.tests.push(query);
    const newTest = new this.testModel(query);
    await newTest.save();
    return { status: "SUCCESS", data: [query] };
  }

  async getQuestions() {
    const questions = await this.questionModel.find().exec();
    return { status: "SUCCESS", data: questions };
  }
}
