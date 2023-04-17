import { AssetEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';

export class AssetRepository extends MongoBaseRepository<AssetEntity> {}
