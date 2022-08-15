import { Controller, Get, Param } from '@nestjs/common';
import { CarSchedule } from '../interfaces/car-schedule.interface';
import { CarScheduleService } from './car-schedule.service';

@Controller('car-schedule')
export class CarScheduleController {
  public constructor(private carScheduleService: CarScheduleService) {}

  @Get(':id')
  async getCarSchedule(@Param('id') id: string): Promise<CarSchedule> {
    return await this.carScheduleService.getCarSchedule(id);
  }
}
