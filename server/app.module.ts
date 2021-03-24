import { Module } from "@nestjs/common";
import { AngularUniversalModule } from "@nestjs/ng-universal";
import { join } from "path";
import { MongooseModule } from "@nestjs/mongoose";
import { TestModule } from "./src/test/test.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/test_crud", {
      useNewUrlParser: true,
    }),
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), "dist/browser"),
      bundle: require("../server/main"),
      liveReload: true,
    }),
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
