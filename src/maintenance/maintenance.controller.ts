import { Controller, Get, Param } from '@nestjs/common';
import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import { MaintenanceDataMockService } from 'src/maintenance-data-mock/maintenance-data-mock.service';
import { mapDataToCarSchedule } from 'src/mappings/car-schedule-mapper';

@Controller('maintenance')
export class MaintenanceController {
  public constructor(
    private maintenanceDataMockService: MaintenanceDataMockService,
  ) {}

  @Get()
  async getMaintenance(@Param() params): Promise<CarSchedule> {
    const car: Car = {
      make: params.make,
      model: params.model,
      year: params.year,
    };

    const maintenanceData =
      this.maintenanceDataMockService.getMaintenanceData(car);

    return await mapDataToCarSchedule(car, maintenanceData);
  }
}
