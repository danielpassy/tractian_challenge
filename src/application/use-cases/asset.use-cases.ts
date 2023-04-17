import { AssetEntity, UserEntity } from 'src/domain/entities';
import { CreateAssetDto } from '../dtos';
import { AssetRepository } from 'src/infra/repositories/asset.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetUseCases {
  constructor(private assetRepository: AssetRepository) {}

  async getMany(): Promise<AssetEntity[]> {
    return await this.assetRepository.getAll();
  }
  async create(asset: CreateAssetDto): Promise<AssetEntity> {
    const assetEntity = new AssetEntity({
      image: asset.image,
      name: asset.name,
      description: asset.description,
      model: asset.model,
      owner: new UserEntity({ id: asset.owner_id }),
      status: asset.status,
      health_level: asset.health_level,
    });
    return await this.assetRepository.create(assetEntity);
  }
}
