import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, { cors: true });
  app.setGlobalPrefix("api");
  app.enableCors({
    origin: "*",
    methods: "GET,POST,PATCH,DELETE,PUT",
    allowedHeaders: "*",
  });
  await app.listen(4200);
}
bootstrap();
