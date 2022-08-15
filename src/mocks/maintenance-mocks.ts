import { Maintenance } from '../interfaces/maintenance.interface';
import * as historyMock from './history-mocks';

export const oilMaintenance: Maintenance = {
  description: 'Oil Change',
  cost: 0,
  frequency: 10000,
  history: historyMock.oilChangeHistoryMock,
};

export const cabinAirFilterMaintenance: Maintenance = {
  description: 'Replace Cabin Air Filter',
  cost: 0,
  frequency: 24000,
  history: historyMock.cabinAirFilterHistoryMock,
};

export const engineAirFilterMaintenance: Maintenance = {
  description: 'Replace Engine Air Filter',
  cost: 0,
  frequency: 48000,
  history: historyMock.engineAirFilterHistoryMock,
};

export const brakeFluidFlush: Maintenance = {
  description: 'Replace Brake Fluid',
  cost: 0,
  frequency: 50000,
  history: historyMock.brakeFluidFlushHistoryMock,
};

export const sparkPlugMaintenance: Maintenance = {
  description: 'Replace Spark Plugs',
  cost: 0,
  frequency: 100000,
  history: historyMock.sparkPlugHistoryMock,
};

export const fuelFilterMaintenance: Maintenance = {
  description: 'Replace Fuel Filter',
  cost: 0,
  frequency: 120000,
  history: [],
};
