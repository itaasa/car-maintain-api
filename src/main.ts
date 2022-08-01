import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Car } from './interfaces/car.interface';
import { CarScheduleService } from './car-schedule/car-schedule.service';

start();
test();

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function test() {
  const subaruBrz: Car = {
    make: 'Subaru',
    model: 'BRZ',
    year: 2014,
  };

  const carScheduleService = new CarScheduleService();

  const carSchedule = await carScheduleService.getCarSchedule(subaruBrz);
  console.log(carSchedule);
}
