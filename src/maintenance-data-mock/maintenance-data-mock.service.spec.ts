import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceDataMockService } from './maintenance-data-mock.service';

describe('MaintenanceDataMockService', () => {
  let service: MaintenanceDataMockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaintenanceDataMockService],
    }).compile();

    service = module.get<MaintenanceDataMockService>(MaintenanceDataMockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
