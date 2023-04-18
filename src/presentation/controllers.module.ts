import { Module } from '@nestjs/common';
import { AssetController } from './asset/asset.controller';
import { UseCasesModule } from 'src/application/use-cases/use-cases.module';
import { UnitController } from './unit/unit.controller';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [UseCasesModule],
  controllers: [
    AssetController,
    UnitController,
    AuthController,
    UserController,
  ],
})
export class ControllersModule {}
