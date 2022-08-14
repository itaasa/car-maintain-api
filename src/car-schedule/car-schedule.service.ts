import { Injectable } from '@nestjs/common';
import * as config from 'config';
import { DbConnection } from 'src/db';
import { CarSchedule } from 'src/interfaces/car-schedule.interface';
import { Car } from 'src/interfaces/car.interface';

@Injectable()
export class CarScheduleService {
  async getCarSchedule(car: Car): Promise<CarSchedule> {
    try {
      let db = await new DbConnection().get();
      let result = await db
        .collection(config.get('mongoCarScheduleCollection'))
        .findOne({
          car: {
            make: car.make,
            model: car.model,
            year: car.year,
          },
        });

      return result;
    } catch (e) {
      throw e;
    }
  }

  async createCarSchedule(carSchedule: CarSchedule) {
    try {
    } catch (e) {
      throw e;
    }
  }
}