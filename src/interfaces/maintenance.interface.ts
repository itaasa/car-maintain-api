import { Part } from './part.interface';
import { Repair } from './repair.interface';

export interface Maintenance {
  description: string;
  dueMileage: number;
  isOem: boolean;
  repair: Repair;
  parts: Part[];
}
