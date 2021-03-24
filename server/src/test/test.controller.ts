import { Controller, Get, Header } from "@nestjs/common";

@Controller("test")
export class TestController {
  @Get()
  @Header("Access-Control-Allow-Origin", "*")
  getAllTest() {
    return "Hello World!!";
  }
}
