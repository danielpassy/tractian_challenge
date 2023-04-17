import { CreateAssetDto, UpdateAssetDto } from 'src/application/dtos';
import { AssetEntity } from 'src/domain/entities';

export interface Assets {
  getAsset(): Promise<AssetEntity[]>;
  createAsset(unit: CreateAssetDto): Promise<AssetEntity>;
  updateAsset(unit: UpdateAssetDto): Promise<AssetEntity>;
}
