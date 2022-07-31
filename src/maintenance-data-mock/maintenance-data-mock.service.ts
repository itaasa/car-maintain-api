import { Injectable } from '@nestjs/common';
import { Car } from 'src/interfaces/car.interface';
import { MaintenanceData } from 'src/interfaces/maintenance-data.interface';
import * as maintenanceDataJson from '../subaru-brz-maintenance.json';

@Injectable()
export class MaintenanceDataMockService {
  private readonly maintenanceData: MaintenanceData = <MaintenanceData>(
    maintenanceDataJson
  );

  getMaintenanceData(car: Car) {
    // TODO: Grab a car's specific maintenance using the car param. For now in the mock, we just grab
    // the Subaru BRZ's maintenance data.
    return this.maintenanceData;
  }
}
