import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { mapAssets } from './asset.map';
import { CreateAssetDto } from 'src/application/dtos';
import { UnitNotFoundError, UserNotFoundError } from 'src/application/errors';
import { AssetUseCaseService } from 'src/infra/nest-use-cases';

@Controller('assets')
export class AssetController {
  constructor(private assetUseCase: AssetUseCaseService) {}

  @Get()
  async getAssets() {
    const assetEntities = await this.assetUseCase.getMany();
    return mapAssets(assetEntities);
  }

  @Post()
  async createAsset(@Body() assetDto: CreateAssetDto) {
    try {
      const assetEntity = await this.assetUseCase.create(assetDto);
      return mapAssets([assetEntity]);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        throw new HttpException(
          `There's no User with id ${assetDto.name}`,
          HttpStatus.NOT_FOUND,
        );
      } else if (error instanceof UnitNotFoundError) {
        throw new HttpException(
          `There's no Unit with id ${assetDto.unit_id}`,
          HttpStatus.NOT_FOUND,
        );
      } else {
        throw Error();
      }
    }
  }
}
