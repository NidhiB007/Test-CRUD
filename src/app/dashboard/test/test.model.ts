export class Question {
  _id: number;
  question: string;
  options: string[] = [];
  answer: string;
  isCorrect: boolean = false;
  marks?: number = 5;
}
