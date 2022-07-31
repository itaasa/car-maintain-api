import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaintenanceController } from './maintenance/maintenance.controller';
import { MaintenanceDataMockService } from './maintenance-data-mock/maintenance-data-mock.service';

@Module({
  imports: [],
  controllers: [AppController, MaintenanceController],
  providers: [AppService, MaintenanceDataMockService],
})
export class AppModule {}
