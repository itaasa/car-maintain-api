import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import { Maintenance } from 'src/interfaces/maintenance.interface';
import { Part } from 'src/interfaces/part.interface';
import { Repair } from 'src/interfaces/repair.interface';

export const mockCar: Car = {
  make: 'Subaru',
  model: 'BRZ',
  year: 2014,
};

export const mockOilChangeRepair: Repair = {
  difficulty: 0,
  hours: 0,
  laborRatePerHour: 0,
  partCost: 80.0,
  laborCost: 20.0,
  miscCost: 0,
  totalCost: 100.0,
};

export const mockOilChangeMaintenance: Maintenance = {
  description: 'Change Engine Oil and Filter',
  dueMileage: 112000,
  isOem: true,
  repair: mockOilChangeRepair,
  parts: [],
};

export const mockBrakeFluidFlushRepair: Repair = {
  difficulty: 2,
  hours: 1.2,
  laborRatePerHour: 101.44,
  partCost: 26.0,
  laborCost: 121.72,
  miscCost: 25.0,
  totalCost: 172.72,
};

export const mockBrakeFluidParts: Part[] = [
  {
    description: 'Brake Fluid',
    manufacturer: '',
    price: 13.0,
    quantity: 2.0,
  },
];

export const mockBrakeFluidFlushMaintenance: Maintenance = {
  description: 'Flush and Replace Brake Fluid',
  dueMileage: 150000,
  isOem: true,
  repair: mockBrakeFluidFlushRepair,
  parts: mockBrakeFluidParts,
};

export const mockCarSchedule: CarSchedule = {
  car: mockCar,
  maintenances: [mockBrakeFluidFlushMaintenance, mockOilChangeMaintenance],
};
