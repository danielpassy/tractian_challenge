import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/db/database.module';
import { ControllersModule } from './presentation/controllers.module';
import { RepositoriesModule } from './infra/repositories/repositories.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './infra/auth/auth.module';
import { ServicesModule } from './infra/nest-use-cases/services.module';

@Module({
  imports: [
    DatabaseModule,
    ControllersModule,
    RepositoriesModule,
    ServicesModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
