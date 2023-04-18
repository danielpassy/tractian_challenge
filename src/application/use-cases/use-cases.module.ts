import { Module } from '@nestjs/common';
import { UnitUseCases } from './unit.use-cases';
import { AssetUseCases } from './asset.use-cases';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { AuthUseCases } from './auth.use-cases';
import { UserUseCases } from './user.use-cases';

@Module({
  exports: [AuthUseCases, AssetUseCases, UnitUseCases, UserUseCases],
  imports: [RepositoriesModule],
  controllers: [],
  providers: [AuthUseCases, AssetUseCases, UnitUseCases, UserUseCases],
})
export class UseCasesModule {}
