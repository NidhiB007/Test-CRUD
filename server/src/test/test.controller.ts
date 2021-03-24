import { Body, Controller, Get, Header, Post } from "@nestjs/common";
import { Test } from "./test.model";
import { TestService } from "./test.service";

@Controller("test")
export class TestController {
  constructor(public readonly _testService: TestService) {}

  @Get()
  async getAllTest() {
    const tests = this._testService.getTests();
    return tests;
  }

  @Get("questions")
  async getAllQuestions() {
    const questions = await this._testService.getQuestions();
    return questions;
  }

  @Post()
  async SaveTest(@Body() query: Test) {
    const result = this._testService.saveTest(query);
    return result;
  }
}
