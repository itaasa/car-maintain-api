export interface Maintenance {
  description: string;
  cost: number;
  frequency: number;
  lastCompletedDate: Date;
  completedMileage: number;
}
