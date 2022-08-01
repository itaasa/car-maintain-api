import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaintenanceController } from './maintenance/maintenance.controller';

@Module({
  imports: [],
  controllers: [AppController, MaintenanceController],
  providers: [AppService],
})
export class AppModule {}
