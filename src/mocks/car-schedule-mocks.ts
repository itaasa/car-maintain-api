import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import { Maintenance } from 'src/interfaces/maintenance.interface';

export const mockCar: Car = {
  make: 'Subaru',
  model: 'BRZ',
  year: 2014,
};

export const oilMaintenance: Maintenance = {
  description: 'Oil Change',
  cost: 0,
  frequency: 10000,
  lastCompletedDate: new Date(2022, 6, 22),
  completedMileage: 100000,
};

export const cabinAirFilterMaintenance: Maintenance = {
  description: 'Replace Cabin Air Filter',
  cost: 0,
  frequency: 24000,
  lastCompletedDate: new Date(2022, 6, 22),
  completedMileage: 100000,
};

export const engineAirFilterMaintenance: Maintenance = {
  description: 'Replace Engine Air Filter',
  cost: 0,
  frequency: 48000,
  lastCompletedDate: new Date(2021, 9, 3),
  completedMileage: 66000,
};

export const brakeFluidFlush: Maintenance = {
  description: 'Replace Brake Fluid',
  cost: 0,
  frequency: 50000,
  lastCompletedDate: new Date(2022, 7, 5),
  completedMileage: 100000,
};

export const sparkPlugMaintenance: Maintenance = {
  description: 'Replace Spark Plugs',
  cost: 0,
  frequency: 100000,
  lastCompletedDate: new Date(2022, 7, 5),
  completedMileage: 100000,
};

export const fuelFilterMaintenance: Maintenance = {
  description: 'Replace Fuel Filter',
  cost: 0,
  frequency: 120000,
  lastCompletedDate: undefined,
  completedMileage: 0,
};

export const mockCarSchedule: CarSchedule = {
  car: mockCar,
  maintenances: [
    oilMaintenance,
    cabinAirFilterMaintenance,
    engineAirFilterMaintenance,
    brakeFluidFlush,
    sparkPlugMaintenance,
    fuelFilterMaintenance,
  ],
};
