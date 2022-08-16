import { Car } from './car.interface';
import { Maintenance } from './maintenance.interface';

export interface CarSchedule {
  _id?: string;
  car: Car;
  maintenances: Maintenance[];
}
