import { History } from './history.interface';

export interface Maintenance {
  description: string;
  cost: number;
  frequency: number;
  history: History[];
}
