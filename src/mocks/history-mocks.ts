import { History } from '../interfaces/history.interface';

export const oilChangeHistoryMock: History[] = [
  {
    dateCompleted: new Date(2021, 12, 23),
    mileage: 64000,
    cost: 100.0,
  },
  {
    dateCompleted: new Date(2022, 2, 1),
    mileage: 76000,
    cost: 101.0,
  },
  {
    dateCompleted: new Date(2022, 4, 8),
    mileage: 88000,
    cost: 80.0,
  },
  {
    dateCompleted: new Date(2022, 6, 15),
    mileage: 100000,
    cost: 90.0,
  },
];

export const cabinAirFilterHistoryMock: History[] = [
  {
    dateCompleted: new Date(2019, 1, 2),
    mileage: 28000,
    cost: 65.0,
  },
  {
    dateCompleted: new Date(2020, 4, 20),
    mileage: 52000,
    cost: 50.0,
  },
  {
    dateCompleted: new Date(2021, 3, 12),
    mileage: 76000,
    cost: 60.0,
  },
  {
    dateCompleted: new Date(2022, 6, 22),
    mileage: 100000,
    cost: 75.0,
  },
];

export const engineAirFilterHistoryMock: History[] = [
  {
    dateCompleted: new Date(2021, 9, 3),
    mileage: 66000,
    cost: 25.0,
  },
];

export const brakeFluidFlushHistoryMock: History[] = [
  {
    dateCompleted: new Date(2022, 7, 5),
    mileage: 100000,
    cost: 150.0,
  },
];

export const sparkPlugHistoryMock: History[] = [
  {
    dateCompleted: new Date(2022, 7, 5),
    mileage: 100000,
    cost: 850.0,
  },
];
