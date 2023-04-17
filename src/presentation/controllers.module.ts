import { Module } from '@nestjs/common';
import { AssetController } from './asset/asset.controller';
import { UseCasesModule } from 'src/application/use-cases/use-cases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [],
})
export class ControllersModule {}
