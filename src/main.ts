import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CarSchedule } from './interfaces/car-schedule.interface';
import { Car } from './interfaces/car.interface';
import { MaintenanceData } from './interfaces/maintenance-data.interface';
import { mapDataToCarSchedule } from './mappings/maintenance-mapper';
import * as maintenanceJson from './subaru-brz-maintenance.json';

async function test() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

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

  console.log(carSchedule);
}

test();
