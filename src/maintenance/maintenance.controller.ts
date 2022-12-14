import { Body, Controller, Put } from '@nestjs/common';
import { CarSchedule } from '../interfaces/car-schedule.interface';
import { MaintenanceService } from './maintenance.service';

@Controller('car-schedule/maintenance')
export class MaintenanceController {
  public constructor(private maintenanceService: MaintenanceService) {}

  @Put()
  async update(@Body() carSchedule: CarSchedule) {
    return await this.maintenanceService.updateMaintenances(carSchedule);
  }
}
