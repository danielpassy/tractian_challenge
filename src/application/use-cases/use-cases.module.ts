import { Module } from '@nestjs/common';
import { UnitUseCases } from './unit.use-cases';
import { AssetUseCases } from './asset.use-cases';
import { RepositoriesModule } from 'src/infra/repositories/repositories.module';
import { AuthUseCases } from './auth.use-cases';
import { UserUseCases } from './user.use-cases';
import { JwtModule } from '@nestjs/jwt';

@Module({
  exports: [AuthUseCases, AssetUseCases, UnitUseCases, UserUseCases],
  imports: [
    RepositoriesModule,
    // If i import from another module, it gets an error
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.jwtConstants,
      }),
    }),
  ],
  providers: [AuthUseCases, AssetUseCases, UnitUseCases, UserUseCases],
})
export class UseCasesModule {}
