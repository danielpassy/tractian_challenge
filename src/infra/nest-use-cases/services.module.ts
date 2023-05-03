import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { RepositoriesModule } from '../repositories/repositories.module';
import {
  AssetUseCaseService,
  AuthUseCasesService,
  CompanyUseCasesService,
  UnitUseCasesService,
  UserUseCasesService,
} from '.';

@Module({
  imports: [
    RepositoriesModule,
    // If i import from another module, it gets an error
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.jwtConstants,
      }),
    }),
  ],
  exports: [
    AssetUseCaseService,
    AuthUseCasesService,
    CompanyUseCasesService,
    UnitUseCasesService,
    UserUseCasesService,
  ],
  providers: [
    AssetUseCaseService,
    AuthUseCasesService,
    CompanyUseCasesService,
    UnitUseCasesService,
    UserUseCasesService,
  ],
})
export class ServicesModule {}
