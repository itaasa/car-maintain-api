import { History } from './history.interface';

export interface Maintenance {
  description: string;
  frequency: number;
  history: History[];
}
