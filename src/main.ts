import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MaintenanceApi } from './interfaces/maintenance-api.interface';
import * as maintenanceJson from './subaru-brz-maintenance.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const subaruMaintenance: MaintenanceApi = <MaintenanceApi>maintenanceJson;
}

bootstrap();
