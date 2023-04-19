import { UnitEntity } from 'src/domain/entities';
import { CreateUnitDto } from '../dtos';
import { UnitRepository } from 'src/infra/repositories/unit.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UnitUseCases {
  constructor(private unitRepository: UnitRepository) {}

  async get(id: string): Promise<UnitEntity> {
    return await this.unitRepository.get(id);
  }

  async getMany(): Promise<UnitEntity[]> {
    return await this.unitRepository.getAll();
  }

  async create(unit: CreateUnitDto): Promise<UnitEntity> {
    const unitEntity = new UnitEntity({
      name: unit.name,
      localization: unit.localization,
      assets: [],
    });
    return await this.unitRepository.create(unitEntity);
  }
}
