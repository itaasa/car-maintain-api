import {
  MaintenanceData,
  PartData,
  RepairData,
} from 'src/interfaces/maintenance-data.interface';

export const mockOilChangeRepairData: RepairData = {
  repair_difficulty: 0,
  repair_hours: 0,
  labor_rate_per_hour: 0,
  part_cost: 80.0,
  labor_cost: 20.0,
  misc_cost: 0,
  total_cost: 100.0,
};

export const mockBrakeFluidFlushRepairData: RepairData = {
  repair_difficulty: 2,
  repair_hours: 1.2,
  labor_rate_per_hour: 101.44,
  part_cost: 26.0,
  labor_cost: 121.72,
  misc_cost: 25,
  total_cost: 172.72,
};

export const mockBrakeFluidFlushPartData: PartData = {
  desc: 'Brake Fluid',
  manufacturer: '',
  price: 13.0,
  qty: 2,
};

export const mockMaintenanceData: MaintenanceData = {
  message: {
    code: 0,
    message: '',
    credentials: '',
    version: '',
    endpoint: '',
    counter: 0,
  },
  data: [
    {
      desc: 'Flush and Replace Brake Fluid',
      due_mileage: 150000,
      due_km: 0,
      is_oem: true,
      repair: mockBrakeFluidFlushRepairData,
      parts: [mockBrakeFluidFlushPartData],
    },
    {
      desc: 'Change Engine Oil and Filter',
      due_mileage: 112000,
      due_km: 0,
      is_oem: true,
      repair: mockOilChangeRepairData,
      parts: [],
    },
  ],
};
