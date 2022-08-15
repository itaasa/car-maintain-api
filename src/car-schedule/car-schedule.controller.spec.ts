import { Test, TestingModule } from '@nestjs/testing';
import { CarScheduleController } from './car-schedule.controller';

describe('CarScheduleController', () => {
  let controller: CarScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarScheduleController],
    }).compile();

    controller = module.get<CarScheduleController>(CarScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
