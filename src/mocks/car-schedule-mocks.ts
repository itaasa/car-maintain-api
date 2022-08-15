import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import * as carMocks from './car-mocks';
import * as mainteanceMocks from './maintenance-mocks';

export const mockCarSchedule: CarSchedule = {
  car: carMocks.subaruBrz,
  maintenances: [
    mainteanceMocks.oilMaintenance,
    mainteanceMocks.cabinAirFilterMaintenance,
    mainteanceMocks.engineAirFilterMaintenance,
    mainteanceMocks.brakeFluidFlush,
    mainteanceMocks.sparkPlugMaintenance,
    mainteanceMocks.fuelFilterMaintenance,
  ],
};
