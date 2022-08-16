import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarScheduleService } from './car-schedule/car-schedule.service';
import { CarScheduleController } from './car-schedule/car-schedule.controller';
import { MaintenanceService } from './maintenance/maintenance.service';
import { MaintenanceController } from './maintenance/maintenance.controller';
import { CarService } from './car/car.service';
import { CarController } from './car/car.controller';

@Module({
  imports: [],
  controllers: [AppController, CarScheduleController, MaintenanceController, CarController],
  providers: [AppService, CarScheduleService, MaintenanceService, CarService],
})
export class AppModule {}
