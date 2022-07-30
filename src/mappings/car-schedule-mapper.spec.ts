import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import { Maintenance } from 'src/interfaces/maintenance.interface';
import { Part } from 'src/interfaces/part.interface';
import { Repair } from 'src/interfaces/repair.interface';
import { MaintenanceData } from '../interfaces/maintenance-data.interface';
import { mockCar, mockCarSchedule } from '../mocks/car-schedule-mocks';
import { mockMaintenanceData } from '../mocks/maintenance-data-mocks';
import { mapDataToCarSchedule } from './car-schedule-mapper';

describe('CarScheduleMapper', () => {
  describe('mapDataToCarSchedule', () => {
    it('should map maintenanceData to a carSchedule', async () => {
      const car: Car = mockCar;
      const maintenanceData: MaintenanceData = mockMaintenanceData;
      const expectedCarSchedule: CarSchedule = mockCarSchedule;

      const result = await mapDataToCarSchedule(car, maintenanceData);

      assertCar(result.car, expectedCarSchedule.car);
      assertMaintenances(result.maintenances, expectedCarSchedule.maintenances);
    });

    function assertCar(resultCar: Car, expectedCar: Car): void {
      expect(resultCar.make).toEqual(expectedCar.make);
      expect(resultCar.model).toEqual(expectedCar.model);
      expect(resultCar.year).toEqual(expectedCar.year);
    }

    function assertMaintenances(
      resultMaintenances: Maintenance[],
      expectedMaintenances: Maintenance[],
    ): void {
      resultMaintenances = resultMaintenances.sort();
      expectedMaintenances = expectedMaintenances.sort();

      expect(resultMaintenances.length).toEqual(expectedMaintenances.length);

      resultMaintenances.forEach((maintenance, maintenanceIndex) => {
        assertMaintenanceItem(
          maintenance,
          expectedMaintenances[maintenanceIndex],
        );

        assertRepairs(
          maintenance.repair,
          expectedMaintenances[maintenanceIndex].repair,
        );

        assertParts(
          maintenance.parts,
          expectedMaintenances[maintenanceIndex].parts,
        );
      });
    }

    function assertMaintenanceItem(
      resultMaintenance: Maintenance,
      expectedMaintenance: Maintenance,
    ): void {
      expect(resultMaintenance.description).toEqual(
        expectedMaintenance.description,
      );
      expect(resultMaintenance.dueMileage).toEqual(
        expectedMaintenance.dueMileage,
      );
      expect(resultMaintenance.isOem).toEqual(expectedMaintenance.isOem);
    }

    function assertRepairs(resultRepair: Repair, expectedRepair: Repair): void {
      expect(resultRepair.difficulty).toEqual(expectedRepair.difficulty);
      expect(resultRepair.hours).toEqual(expectedRepair.hours);
      expect(resultRepair.laborCost).toEqual(expectedRepair.laborCost);
      expect(resultRepair.laborRatePerHour).toEqual(
        expectedRepair.laborRatePerHour,
      );
      expect(resultRepair.miscCost).toEqual(expectedRepair.miscCost);
      expect(resultRepair.partCost).toEqual(expectedRepair.partCost);
      expect(resultRepair.totalCost).toEqual(expectedRepair.totalCost);
    }

    function assertParts(resultParts: Part[], expectedParts: Part[]): void {
      resultParts.forEach((partResult, partIndex) => {
        expect(partResult.description).toEqual(
          expectedParts[partIndex].description,
        );
        expect(partResult.manufacturer).toEqual(
          expectedParts[partIndex].manufacturer,
        );

        expect(partResult.price).toEqual(expectedParts[partIndex].price);

        expect(partResult.quantity).toEqual(expectedParts[partIndex].quantity);
      });
    }
  });
});
