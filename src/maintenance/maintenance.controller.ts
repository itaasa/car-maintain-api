import { Controller, Get, Param } from '@nestjs/common';
import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import { mapDataToCarSchedule } from 'src/mappings/car-schedule-mapper';
import { mockMaintenanceData } from 'src/mocks/maintenance-data-mocks';

@Controller('maintenance')
export class MaintenanceController {
  public constructor() {}

  @Get()
  async getMaintenance(@Param() params): Promise<CarSchedule> {
    const car: Car = {
      make: params.make,
      model: params.model,
      year: params.year,
    };

    return await mapDataToCarSchedule(car, mockMaintenanceData);
  }
}
