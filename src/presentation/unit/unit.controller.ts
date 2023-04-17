import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUnitDto } from 'src/application/dtos';
import { UnitUseCases } from 'src/application/use-cases';
import { mapUnits } from './unit.map';

@Controller('unit')
export class UnitController {
  constructor(private unitUseCase: UnitUseCases) {}

  @Get()
  async getunits() {
    const unitEntities = await this.unitUseCase.getMany();
    return mapUnits(unitEntities);
  }

  @Post()
  async createunit(@Body() unitDto: CreateUnitDto) {
    const unitEntity = await this.unitUseCase.create(unitDto);
    return mapUnits([unitEntity]);
  }
}
