import { Maintenance } from '../interfaces/maintenance.interface';
import * as historyMock from './history-mocks';

export const oilMaintenance: Maintenance = {
  description: 'Oil Change',
  frequency: 10000,
  history: historyMock.oilChangeHistoryMock,
};

export const cabinAirFilterMaintenance: Maintenance = {
  description: 'Replace Cabin Air Filter',
  frequency: 24000,
  history: historyMock.cabinAirFilterHistoryMock,
};

export const engineAirFilterMaintenance: Maintenance = {
  description: 'Replace Engine Air Filter',
  frequency: 48000,
  history: historyMock.engineAirFilterHistoryMock,
};

export const brakeFluidFlush: Maintenance = {
  description: 'Replace Brake Fluid',
  frequency: 50000,
  history: historyMock.brakeFluidFlushHistoryMock,
};

export const sparkPlugMaintenance: Maintenance = {
  description: 'Replace Spark Plugs',
  frequency: 100000,
  history: historyMock.sparkPlugHistoryMock,
};

export const fuelFilterMaintenance: Maintenance = {
  description: 'Replace Fuel Filter',
  frequency: 120000,
  history: [],
};
