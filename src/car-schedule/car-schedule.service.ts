import { Injectable } from '@nestjs/common';
import * as config from 'config';
import { ObjectId } from 'mongodb';
import { DbConnection } from '../db';
import { CarSchedule } from '../interfaces/car-schedule.interface';

@Injectable()
export class CarScheduleService {
  async createCarSchedule(carSchedule: CarSchedule): Promise<string> {
    try {
      let db = await new DbConnection().get();
      let result = await db
        .collection(config.get('mongoCarScheduleCollection'))
        .insertOne(carSchedule);

      return result.insertedId;
    } catch (e) {
      throw e;
    }
  }

  async getCarSchedule(id: string): Promise<CarSchedule> {
    try {
      let db = await new DbConnection().get();
      let result = await db
        .collection(config.get('mongoCarScheduleCollection'))
        .findOne({
          _id: new ObjectId(id),
        });

      return result;
    } catch (e) {
      throw e;
    }
  }

  async updateCarSchedule(carSchedule: CarSchedule): Promise<string> {
    const idQuery = { _id: new ObjectId(carSchedule._id) };
    const updateCarScheduleQuery = { $set: carSchedule };

    try {
      let db = await new DbConnection().get();
      return await db
        .collection(config.get('mongoCarScheduleCollection'))
        .updateOne(idQuery, updateCarScheduleQuery);
    } catch (e) {
      throw e;
    }
  }
}
