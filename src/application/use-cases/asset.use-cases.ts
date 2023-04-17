import { AssetEntity, UnitEntity, UserEntity } from 'src/domain/entities';
import { CreateAssetDto } from '../dtos';
import { AssetRepository } from 'src/infra/repositories/asset.repository';
import { Injectable } from '@nestjs/common';
import { UnitRepository } from 'src/infra/repositories/unit.repository';
import { UserRepository } from 'src/infra/repositories';
import { UserNotFoundError } from '../errors';

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
  async create(asset: CreateAssetDto): Promise<AssetEntity> {
    const owner = await this.userRepository.get(asset.owner_id);

    if (!owner) throw new UserNotFoundError();

    const assetEntity = new AssetEntity({
      image: asset.image,
      name: asset.name,
      description: asset.description,
      model: asset.model,
      status: asset.status,
      health_level: asset.health_level,
      owner: new UserEntity({ id: asset.owner_id }),
      unit: new UnitEntity({ id: asset.unit_id }),
    });
    return await this.unitRepository.addAsset(assetEntity);
  }
}
