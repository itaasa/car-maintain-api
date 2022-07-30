import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';
import { MaintenanceData } from '../interfaces/maintenance-data.interface';
import { mockCar, mockCarSchedule } from '../mocks/car-schedule-mocks';
import { mockMaintenanceData } from '../mocks/maintenance-data-mocks';
import { mapDataToCarSchedule } from './car-schedule-mapper';

fdescribe('CarScheduleMapper', () => {
  describe('mapDataToCarSchedule', () => {
    it('should map maintenanceData to a carSchedule', async () => {
      const car: Car = mockCar;
      const maintenanceData: MaintenanceData = mockMaintenanceData;
      const expectedCarSchedule: CarSchedule = {
        ...mockCarSchedule,
        maintenances: mockCarSchedule.maintenances.sort(),
      };

      const result = await mapDataToCarSchedule(car, maintenanceData);

      expect(result.car.make).toEqual(expectedCarSchedule.car.make);
      expect(result.car.model).toEqual(expectedCarSchedule.car.model);
      expect(result.car.year).toEqual(expectedCarSchedule.car.year);

      result.maintenances = result.maintenances.sort();

      expect(result.maintenances.length).toEqual(
        expectedCarSchedule.maintenances.length,
      );

      result.maintenances.forEach((maintenanceResult, index) => {
        expect(maintenanceResult.description).toEqual(
          expectedCarSchedule.maintenances[index].description,
        );

        expect(maintenanceResult.dueMileage).toEqual(
          expectedCarSchedule.maintenances[index].dueMileage,
        );

        expect(maintenanceResult.isOem).toEqual(
          expectedCarSchedule.maintenances[index].isOem,
        );
      });
    });
  });
});
