import { UnitEntity } from 'src/domain/entities';
import { CreateUnitDto } from '../dtos';

export class UnitUseCases {
  constructor(private unitRepository: UnitRepository) {}

  async getMany(): Promise<UnitEntity[]> {
    return await this.unitRepository.findAll();
  }
  async create(asset: CreateUnitDto): Promise<UnitEntity> {
    return await this.unitRepository.create(asset);
  }
}
