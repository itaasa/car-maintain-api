import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import { Maintenance } from 'src/interfaces/maintenance.interface';
import { History } from '../interfaces/history.interface';

export const mockCar: Car = {
  make: 'Subaru',
  model: 'BRZ',
  year: 2014,
};

export const oilChangeHistoryMock: History[] = [
  {
    dateCompleted: new Date(2021, 12, 23),
    mileage: 64000,
  },
  {
    dateCompleted: new Date(2022, 2, 1),
    mileage: 76000,
  },
  {
    dateCompleted: new Date(2022, 4, 8),
    mileage: 88000,
  },
  {
    dateCompleted: new Date(2022, 6, 15),
    mileage: 100000,
  },
];

export const cabinAirFilterHistoryMock: History[] = [
  {
    dateCompleted: new Date(2019, 1, 2),
    mileage: 28000,
  },
  {
    dateCompleted: new Date(2020, 4, 20),
    mileage: 52000,
  },
  {
    dateCompleted: new Date(2021, 3, 12),
    mileage: 76000,
  },
  {
    dateCompleted: new Date(2022, 6, 22),
    mileage: 100000,
  },
];

export const engineAirFilterHistoryMock: History[] = [
  {
    dateCompleted: new Date(2021, 9, 3),
    mileage: 66000,
  },
];

export const brakeFluidFlushHistoryMock: History[] = [
  {
    dateCompleted: new Date(2022, 7, 5),
    mileage: 100000,
  },
];

export const sparkPlugHistoryMock: History[] = [
  {
    dateCompleted: new Date(2022, 7, 5),
    mileage: 100000,
  },
];

export const oilMaintenance: Maintenance = {
  description: 'Oil Change',
  cost: 0,
  frequency: 10000,
  history: oilChangeHistoryMock,
};

export const cabinAirFilterMaintenance: Maintenance = {
  description: 'Replace Cabin Air Filter',
  cost: 0,
  frequency: 24000,
  history: cabinAirFilterHistoryMock,
};

export const engineAirFilterMaintenance: Maintenance = {
  description: 'Replace Engine Air Filter',
  cost: 0,
  frequency: 48000,
  history: engineAirFilterHistoryMock,
};

export const brakeFluidFlush: Maintenance = {
  description: 'Replace Brake Fluid',
  cost: 0,
  frequency: 50000,
  history: brakeFluidFlushHistoryMock,
};

export const sparkPlugMaintenance: Maintenance = {
  description: 'Replace Spark Plugs',
  cost: 0,
  frequency: 100000,
  history: sparkPlugHistoryMock,
};

export const fuelFilterMaintenance: Maintenance = {
  description: 'Replace Fuel Filter',
  cost: 0,
  frequency: 120000,
  history: [],
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
