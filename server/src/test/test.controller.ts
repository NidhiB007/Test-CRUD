import { Body, Controller, Get, Header, Post } from "@nestjs/common";
import { Test } from "./test.model";
import { TestService } from "./test.service";

@Controller("test")
export class TestController {
  constructor(public readonly _testService: TestService) {}

  @Get()
  getAllTest() {
    return this._testService.getTests();
  }

  @Get("questions")
  getAllQuestions() {
    return this._testService.getQuestions();
  }

  @Post()
  SaveTest(@Body() query: Test) {
    console.log(query);

    return this._testService.saveTest(query);
  }
}
