import { Module } from '@nestjs/common';
import { AssetController } from './asset/asset.controller';
import { UnitController } from './unit/unit.controller';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';
import { CompanyController } from './company/company.controller';
import { ServicesModule } from 'src/infra/nest-use-cases/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [
    AssetController,
    UnitController,
    AuthController,
    UserController,
    CompanyController,
  ],
})
export class ControllersModule {}
