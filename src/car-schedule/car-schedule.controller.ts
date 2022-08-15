import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CarSchedule } from '../interfaces/car-schedule.interface';
import { CarScheduleService } from './car-schedule.service';

@Controller('car-schedule')
export class CarScheduleController {
  public constructor(private carScheduleService: CarScheduleService) {}

  @Get(':id')
  async find(@Param('id') id: string): Promise<CarSchedule> {
    return await this.carScheduleService.getCarSchedule(id);
  }

  @Post()
  async create(@Body() carSchedule: CarSchedule) {
    return await this.carScheduleService.createCarSchedule(carSchedule);
  }
}
