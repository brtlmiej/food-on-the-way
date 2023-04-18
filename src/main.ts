import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import databaseConfig from "./config/database/database.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(+process.env.APP_PORT || 3000);
}
bootstrap();
