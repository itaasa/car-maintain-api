import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CarScheduleService } from './car-schedule/car-schedule.service';
import { CarSchedule } from './interfaces/car-schedule.interface';
import { Car } from './interfaces/car.interface';
import { mockCarSchedule } from './mocks/car-schedule-mocks';

test();

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function test() {
  const carScheduleService = new CarScheduleService();

  let id = await carScheduleService.createCarSchedule(mockCarSchedule);
  console.log(id);
}
