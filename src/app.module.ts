import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from './infra/db/database.module';
import { ControllersModule } from './presentation/controllers.module';
import { UseCasesModule } from './application/use-cases/use-cases.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './infra/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    ControllersModule,
    RepositoriesModule,
    UseCasesModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
