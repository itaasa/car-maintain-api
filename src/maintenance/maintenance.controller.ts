import { Controller, Get } from '@nestjs/common';

@Controller('maintenance')
export class MaintenanceController {
  @Get()
  findAll(): string {
    return 'test';
  }
}
