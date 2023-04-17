import { AssetEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Asset, AssetDocument } from '../db/asset.schema';

export class AssetRepository extends MongoBaseRepository<AssetEntity> {
  constructor(
    @InjectModel(Asset.name) private userModel: Model<AssetDocument>,
  ) {
    super(userModel);
  }
}
