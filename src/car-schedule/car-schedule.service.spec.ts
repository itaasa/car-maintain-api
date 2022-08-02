import { Test, TestingModule } from '@nestjs/testing';
import { CarScheduleService } from './car-schedule.service';

describe('CarScheduleService', () => {
  let service: CarScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarScheduleService],
    }).compile();

    service = module.get<CarScheduleService>(CarScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
