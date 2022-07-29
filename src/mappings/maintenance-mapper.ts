import { MaintenanceApi } from 'src/interfaces/maintenance-api.interface';
import { Maintenance } from 'src/interfaces/maintenance.interface';
import { Part } from 'src/interfaces/part.interface';
import { Repair } from 'src/interfaces/repair.interface';

export async function map(
  maintenanceApi: MaintenanceApi,
): Promise<Maintenance[]> {
  let repair: Repair;
  let maintenanceItems: Maintenance[] = [];
  let parts: Part[];

  maintenanceItems = maintenanceApi.data.map((data) => {
    const repairItem: Repair = {
      difficulty: data.repair.repair_difficulty,
      hours: data.repair.repair_hours,
      laborRatePerHour: data.repair.labor_rate_per_hour,
      partCost: data.repair.part_cost,
      laborCost: data.repair.labor_cost,
      miscCost: data.repair.misc_cost,
      totalCost: data.repair.total_cost,
    }

    const partsItems: Part[] = data.parts.map((part) => {
      return 
    })
    
    const maintenanceItem: Maintenance = {
      description: data.desc,
      dueMileage: data.due_mileage,
      isOem: data.is_oem,
      repair: ,
      parts: undefined,
    };
  });
  return maintenanceItems;
}
