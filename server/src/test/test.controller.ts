import { Controller, Get, Header, Post } from "@nestjs/common";

@Controller("test")
export class TestController {
  @Get()
  getAllTest() {
    return { status: "SUCCESS", data: [] };
  }

  @Get("questions")
  getAllQuestions() {
    return { status: "SUCCESS", data: [] };
  }

  @Post()
  SaveTest() {
    return { status: "SUCCESS" };
  }
}
