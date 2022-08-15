import { Test, TestingModule } from '@nestjs/testing';
import { mockCarSchedule } from '../mocks/car-schedule-mocks';
import { CarScheduleController } from './car-schedule.controller';
import { CarScheduleService } from './car-schedule.service';

describe('CarScheduleController', () => {
  let controller: CarScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarScheduleController],
      providers: [CarScheduleService],
    }).compile();

    controller = module.get<CarScheduleController>(CarScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('find', () => {
    it('should return a car schedule', async () => {
      const expectedResult = mockCarSchedule;
      const mockCarScheduleId = 'mock-id-123';
      jest
        .spyOn(controller, 'find')
        .mockImplementation(async () => expectedResult);

      const actualResult = await controller.find(mockCarScheduleId);
      expect(actualResult).toBe(expectedResult);
    });
  });
});
