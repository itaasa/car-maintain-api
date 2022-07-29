import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import {
  MaintenanceData,
  PartsData,
  RepairData,
} from 'src/interfaces/maintenance-data.interface';
import { Maintenance } from 'src/interfaces/maintenance.interface';
import { Part } from 'src/interfaces/part.interface';
import { Repair } from 'src/interfaces/repair.interface';

export async function mapDataToCarSchedule(
  car: Car,
  maintenanceData: MaintenanceData,
): Promise<CarSchedule> {
  const carSchedule: CarSchedule = {
    car: car,
    maintenances: [],
  };

  maintenanceData.data.forEach((data) => {
    const maintenance: Maintenance = {
      description: data.desc,
      dueMileage: data.due_mileage,
      isOem: data.is_oem,
      repair: mapRepair(data.repair),
      parts: mapParts(data.parts),
    };

    carSchedule.maintenances.push(maintenance);
  });

  return carSchedule;
}

function mapRepair(repairData: RepairData): Repair {
  const repair: Repair = {
    difficulty: repairData.repair_difficulty,
    hours: repairData.repair_hours,
    laborRatePerHour: repairData.labor_rate_per_hour,
    partCost: repairData.part_cost,
    laborCost: repairData.labor_cost,
    miscCost: repairData.misc_cost,
    totalCost: repairData.total_cost,
  };

  return repair;
}

function mapParts(partsData: PartsData[]): Part[] {
  const parts: Part[] = [];

  if (partsData) {
    partsData.forEach((partData) => {
      const part: Part = {
        description: partData.desc,
        manufacturer: partData.manufacturer,
        price: partData.price,
        quantity: partData.qty,
      };
      parts.push(part);
    });
  }

  return parts;
}
