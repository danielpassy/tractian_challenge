import { Module } from '@nestjs/common';
import { AssetController } from './asset/asset.controller';
import { UseCasesModule } from 'src/application/use-cases/use-cases.module';
import { UnitController } from './unit/unit.controller';

@Module({
  imports: [UseCasesModule],
  controllers: [AssetController, UnitController],
})
export class ControllersModule {}
