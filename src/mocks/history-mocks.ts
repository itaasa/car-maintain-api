import { History } from '../interfaces/history.interface';

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
