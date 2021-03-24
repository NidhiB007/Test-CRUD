import { Module } from "@nestjs/common";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionSchema, TestSchema } from "./test.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Test", schema: TestSchema },
      { name: "Question", schema: QuestionSchema },
    ]),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
