import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarScheduleService } from './car-schedule/car-schedule.service';
import { CarScheduleController } from './car-schedule/car-schedule.controller';
import { MaintenanceService } from './maintenance/maintenance.service';
import { MaintenanceController } from './maintenance/maintenance.controller';

@Module({
  imports: [],
  controllers: [AppController, CarScheduleController, MaintenanceController],
  providers: [AppService, CarScheduleService, MaintenanceService],
})
export class AppModule {}
