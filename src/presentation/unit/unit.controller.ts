import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUnitDto } from 'src/application/dtos';
import { mapUnits } from './unit.map';
import { UnitUseCasesService } from 'src/infra/nest-use-cases';

@Controller('units')
export class UnitController {
  constructor(private unitUseCase: UnitUseCasesService) {}

  @Get('simplified/')
  async getUnitsSimplifiec() {
    const unitEntities = await this.unitUseCase.getMany();
    return unitEntities.map((unit) => ({
      id: unit.id,
      name: unit.name,
    }));
  }

  @Get()
  async getUnits() {
    const unitEntities = await this.unitUseCase.getMany();
    return mapUnits(unitEntities);
  }

  @Get(':id/')
  async getUnit(@Param('id') id: string) {
    const unitEntity = await this.unitUseCase.get(id);
    const units = mapUnits([unitEntity])[0];
    return units;
  }

  @Post()
  async createUnit(@Body() unitDto: CreateUnitDto) {
    const unitEntity = await this.unitUseCase.create(unitDto);
    return mapUnits([unitEntity]);
  }
}
