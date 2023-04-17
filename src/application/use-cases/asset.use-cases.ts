import { AssetEntity } from 'src/domain/entities';
import { CreateAssetDto } from '../dtos';

export class AssetUseCases {
  constructor(private assetRepository: AssetRepository) {}

  async getMany(): Promise<AssetEntity[]> {
    return await this.assetRepository.findAll();
  }
  async create(asset: CreateAssetDto): Promise<AssetEntity> {
    return await this.assetRepository.create(asset);
  }
}
