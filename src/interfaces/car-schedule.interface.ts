import { Car } from './car.interface';
import { Maintenance } from './maintenance.interface';

export interface CarSchedule {
  car: Car;
  maintenances: Maintenance[];
}
