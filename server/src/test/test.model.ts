export class Test {
  id?: number;
  name: string;
  marks: number = 0;
  duration: number = 30;
}
export class Question {
  id: number;
  question: string;
  options: string[] = [];
  answer: string;
  isCorrect: boolean = false;
  marks?: number = 5;
}
