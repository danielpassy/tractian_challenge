import { Module } from '@nestjs/common';
import { UnitUseCases } from './unit.use-cases';
import { AssetUseCases } from './asset.use-cases';
import { UserRepository } from 'src/infra/repositories';
import { AssetRepository } from 'src/infra/repositories/asset.repository';
import { UnitRepository } from 'src/infra/repositories/unit.repository';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { AuthUseCases } from './auth.use-cases';

@Module({
  exports: [AuthUseCases, AssetUseCases, UnitUseCases],
  imports: [RepositoriesModule],
  controllers: [],
  providers: [AuthUseCases, AssetUseCases, UnitUseCases],
})
export class UseCasesModule {}
