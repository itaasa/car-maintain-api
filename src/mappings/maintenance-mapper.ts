import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import { MaintenanceData } from 'src/interfaces/maintenance-data.interface';
import { Maintenance } from 'src/interfaces/maintenance.interface';
import { Part } from 'src/interfaces/part.interface';
import { Repair } from 'src/interfaces/repair.interface';

export async function map(
  car: Car,
  maintenanceData: MaintenanceData,
): Promise<CarSchedule> {
  const carSchedule: CarSchedule = {
    car: car,
    maintenances: [],
  };

  maintenanceData.data.forEach((data) => {
    const parts: Part[] = [];

    const repair: Repair = {
      difficulty: data.repair.repair_difficulty,
      hours: data.repair.repair_hours,
      laborRatePerHour: data.repair.labor_rate_per_hour,
      partCost: data.repair.part_cost,
      laborCost: data.repair.labor_cost,
      miscCost: data.repair.misc_cost,
      totalCost: data.repair.total_cost,
    };

    if (data.parts) {
      data.parts.forEach((partData) => {
        const part: Part = {
          description: partData.desc,
          manufacturer: partData.manufacturer,
          price: partData.price,
          quantity: partData.qty,
        };
        parts.push(part);
      });
    }

    const maintenance: Maintenance = {
      description: data.desc,
      dueMileage: data.due_mileage,
      isOem: data.is_oem,
      repair: repair,
      parts: parts,
    };

    carSchedule.maintenances.push(maintenance);
  });

  return carSchedule;
}
