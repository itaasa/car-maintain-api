import { Injectable } from '@nestjs/common';
import * as config from 'config';
import { ObjectId } from 'mongodb';
import { DbConnection } from 'src/db';
import { CarSchedule } from 'src/interfaces/car-schedule.interface';

@Injectable()
export class MaintenanceService {
  async updateMaintenances(carSchedule: CarSchedule): Promise<string> {
    const findQuery = { _id: new ObjectId(carSchedule._id) };
    const updateQuery = {
      $set: { maintenances: carSchedule.maintenances },
    };

    try {
      let db = await new DbConnection().get();
      let result = await db
        .collection(config.get('mongoCarScheduleCollection'))
        .updateOne(findQuery, updateQuery);

      return result;
    } catch (e) {
      throw e;
    }
  }
}
