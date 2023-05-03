import { AssetEntity, UnitEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-abstract.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Unit, UnitDocument } from '../db/unit.schema';
import { Model } from 'mongoose';

export class UnitRepository extends MongoBaseRepository<UnitEntity> {
  constructor(@InjectModel(Unit.name) private userModel: Model<UnitDocument>) {
    super(userModel);
  }

  async get(id: any): Promise<UnitEntity | null> {
    const entry = await this._mongoDocument
      .findById(id)
      .populate({ path: 'assets' })
      .exec();
    return entry?.toEntity() || null;
  }
  async getAll(): Promise<UnitEntity[]> {
    const entries = await this._mongoDocument
      .find()
      .populate({ path: 'assets' })
      .exec();
    return entries.map((entry) => entry.toEntity());
  }

  async addAsset(asset: AssetEntity, unitId: string) {
    return await this._mongoDocument.findByIdAndUpdate(unitId, {
      $push: { assets: asset.id },
    });
  }
}
