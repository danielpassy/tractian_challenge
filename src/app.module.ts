import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from './infra/db/database.module';
import { ControllersModule } from './presentation/controllers.module';
import { UseCasesModule } from './application/use-cases/use-cases.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: process.env.jwtConstants,
      }),
    }),
    DatabaseModule,
    ControllersModule,
    RepositoriesModule,
    UseCasesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
