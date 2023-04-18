import { AssetEntity, UnitEntity, UserEntity } from 'src/domain/entities';
import { CreateAssetDto } from '../dtos';
import { AssetRepository } from 'src/infra/repositories/asset.repository';
import { Injectable } from '@nestjs/common';
import { UnitRepository } from 'src/infra/repositories/unit.repository';
import { UserRepository } from 'src/infra/repositories';
import { UnitNotFoundError, UserNotFoundError } from '../errors';

@Injectable()
export class AssetUseCases {
  constructor(
    private assetRepository: AssetRepository,
    private unitRepository: UnitRepository,
    private userRepository: UserRepository,
  ) {}

  async getMany(): Promise<AssetEntity[]> {
    return await this.assetRepository.getAll();
  }
  async create(assetDto: CreateAssetDto): Promise<AssetEntity> {
    const owner = await this.userRepository.get(assetDto.owner_id);
    const unit = await this.unitRepository.get(assetDto.unit_id);

    if (!owner) throw new UserNotFoundError();
    if (!unit) throw new UnitNotFoundError();

    const assetEntity = new AssetEntity({
      image: assetDto.image,
      name: assetDto.name,
      description: assetDto.description,
      model: assetDto.model,
      status: assetDto.status,
      health_level: assetDto.health_level,
      owner_id: assetDto.owner_id,
      unit_id: assetDto.unit_id,
    });
    const asset = await this.assetRepository.create(assetEntity);
    await this.unitRepository.addAsset(asset, assetDto.unit_id);
    return asset;
  }
}
