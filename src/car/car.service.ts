import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { DbConnection } from '../db';
import * as config from 'config';
import { CarSchedule } from '../interfaces/car-schedule.interface';

@Injectable()
export class CarService {
  async updateCar(carSchedule: CarSchedule): Promise<string> {
    const findQuery = { _id: new ObjectId(carSchedule._id) };
    const updateQuery = {
      $set: { car: carSchedule.car },
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
