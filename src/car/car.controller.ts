import { Body, Controller, Put } from '@nestjs/common';
import { CarSchedule } from '../interfaces/car-schedule.interface';
import { CarService } from './car.service';

@Controller('car-schedule/car')
export class CarController {
  public constructor(private carService: CarService) {}

  @Put()
  async update(@Body() carSchedule: CarSchedule) {
    return await this.carService.updateCar(carSchedule);
  }
}
