import { Injectable } from "@nestjs/common";
import { Question, Test } from "./test.model";

@Injectable()
export class TestService {
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

  getTests() {
    return { status: "SUCCESS", data: [...this.tests] };
  }

  saveTest(query: Test) {
    query.id = new Date().getTime();
    this.tests.push(query);
    return { status: "SUCCESS", data: [query] };
  }

  getQuestions() {
    return { status: "SUCCESS", data: [...this.questions] };
  }
}
