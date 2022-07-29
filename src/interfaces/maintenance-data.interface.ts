export interface MaintenanceData {
  message: {
    code: number;
    message: string;
    credentials: string;
    version: string;
    endpoint: string;
    counter: number;
  };
  data: [
    {
      desc: string;
      due_mileage: number;
      due_km: number;
      is_oem: boolean;
      repair: RepairApi;
      parts: PartsApi[];
    },
  ];
}

export interface PartsApi {
  desc: string;
  manufacturer: string;
  price: number;
  qty: number;
}

export interface RepairApi {
  repair_difficulty: number;
  repair_hours: number;
  labor_rate_per_hour: number;
  part_cost: number;
  labor_cost: number;
  misc_cost: number;
  total_cost: number;
}
