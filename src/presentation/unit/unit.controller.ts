import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUnitDto } from 'src/application/dtos';
import { UnitUseCases } from 'src/application/use-cases';
import { mapUnits } from './unit.map';

@Controller('asset')
export class UnitController {
  constructor(private unitUseCase: UnitUseCases) {}

  @Get()
  async getAssets() {
    const assetEntities = await this.unitUseCase.getMany();
    return mapUnits(assetEntities);
  }

  @Post()
  async createAsset(@Body() assetDto: CreateUnitDto) {
    const assetEntity = await this.unitUseCase.create(assetDto);
    return mapUnits([assetEntity]);
  }
}
