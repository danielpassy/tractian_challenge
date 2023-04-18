import { Module } from '@nestjs/common';
import { AssetController } from './asset/asset.controller';
import { UseCasesModule } from 'src/application/use-cases/use-cases.module';
import { UnitController } from './unit/unit.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UseCasesModule],
  controllers: [AssetController, UnitController, AuthController],
})
export class ControllersModule {}
