import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

start();

async function start() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);
}
