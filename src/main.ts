import { NestFactory } from '@nestjs/core';
import * as config from 'config';
import { AppModule } from './app.module';
import { DbConnection } from './db';
import { CarSchedule } from './interfaces/car-schedule.interface';
import { Car } from './interfaces/car.interface';
import { MaintenanceData } from './interfaces/maintenance-data.interface';
import { mapDataToCarSchedule } from './mappings/car-schedule-mapper';
import * as maintenanceJson from './subaru-brz-maintenance.json';

start();
test();

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function test() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const subaruBrz: Car = {
    make: 'Subaru',
    model: 'BRZ',
    year: 2014,
  };

  const subaruBrzMaintenance: MaintenanceData = <MaintenanceData>(
    maintenanceJson
  );

  const carSchedule: CarSchedule = await mapDataToCarSchedule(
    subaruBrz,
    subaruBrzMaintenance,
  );

  try {
    let db = await new DbConnection().get();
    await db
      .collection(config.get('mongoCarScheduleCollection'))
      .insertOne(carSchedule);
  } catch (e) {
    throw e;
  }
}
