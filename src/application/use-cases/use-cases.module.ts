import { Module } from '@nestjs/common';
import { UnitUseCases } from './unit.use-cases';
import { AssetUseCases } from './asset.use-cases';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { AuthUseCases } from './auth.use-cases';
import { UserUseCases } from './user.use-cases';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  exports: [AuthUseCases, AssetUseCases, UnitUseCases, UserUseCases],
  imports: [
    RepositoriesModule,
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.jwtConstants,
      }),
    }),
  ],
  controllers: [],
  providers: [AuthUseCases, AssetUseCases, UnitUseCases, UserUseCases],
})
export class UseCasesModule {}
