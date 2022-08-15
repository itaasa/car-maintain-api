import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarScheduleService } from './car-schedule/car-schedule.service';
import { CarScheduleController } from './car-schedule/car-schedule.controller';

@Module({
  imports: [],
  controllers: [AppController, CarScheduleController],
  providers: [AppService, CarScheduleService],
})
export class AppModule {}
