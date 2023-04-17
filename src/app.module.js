import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './application/const/auth.const';
import { DatabaseModule } from './infra/db/database.module';
import { ControllersModule } from './presentation/controllers.module';
import { UseCasesModule } from './application/use-cases/use-cases.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
    DatabaseModule,
    ControllersModule,
    RepositoriesModule,
    UseCasesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
