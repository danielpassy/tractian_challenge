import { UnitEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Unit, UnitDocument } from '../db/unit.schema';
import { Model } from 'mongoose';

export class UnitRepository extends MongoBaseRepository<UnitEntity> {
  constructor(@InjectModel(Unit.name) private userModel: Model<UnitDocument>) {
    super(userModel);
  }
  async getAll(): Promise<UnitEntity[]> {
    const entries = await this._mongoDocument.find().populate('assets').exec();
    return entries.map((e) => e.toEntity());
  }
}
