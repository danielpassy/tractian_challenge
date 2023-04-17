import { Body, Controller, Get, Post } from '@nestjs/common';
import { mapAssets } from './asset.map';
import { CreateAssetDto } from 'src/application/dtos';
import { AssetUseCases } from 'src/application/use-cases';

@Controller('asset')
export class AssetController {
  constructor(private assetUseCase: AssetUseCases) {}

  @Get()
  async getAssets() {
    const assetEntities = await this.assetUseCase.getMany();
    return mapAssets(assetEntities);
  }

  @Post()
  async createAsset(@Body() assetDto: CreateAssetDto) {
    const assetEntity = await this.assetUseCase.create(assetDto);
    return mapAssets([assetEntity]);
  }
}
