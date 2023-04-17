import { CreateUnitDto, UpdateUnitDto } from 'src/application/dtos';
import { UnitEntity } from 'src/domain/entities';

export interface Unit {
  getUnits(): Promise<UnitEntity[]>;
  createUnit(unit: CreateUnitDto): Promise<UnitEntity>;
  updateUnit(unit: UpdateUnitDto): Promise<UnitEntity>;
}
