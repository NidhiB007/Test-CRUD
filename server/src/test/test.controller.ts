import { Controller, Get } from "@nestjs/common";

@Controller("test")
export class TestController {
  @Get()
  getAllTest() {
    return "Hello World!!";
  }
}
