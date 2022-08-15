import { Car } from './car.interface';
import { Maintenance } from './maintenance.interface';

export interface CarSchedule {
  id?: string;
  car: Car;
  maintenances: Maintenance[];
}
