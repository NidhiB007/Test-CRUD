export class Question {
  id: number;
  question: string;
  options: string[] = [];
  answer: string;
  isCorrect: boolean = false;
  marks?: number = 5;
}
