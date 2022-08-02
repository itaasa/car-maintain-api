import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaintenanceController } from './maintenance/maintenance.controller';
import { CarScheduleService } from './car-schedule/car-schedule.service';

@Module({
  imports: [],
  controllers: [AppController, MaintenanceController],
  providers: [AppService, CarScheduleService],
})
export class AppModule {}
