import { IsEnum, IsMongoId, IsNumber, IsString } from 'class-validator';
import { ModelEnum } from '../const/model.const';
import { StatusEnum } from '../const/status.const';

export class CreateAssetDto {
  @IsString()
  image: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsEnum(ModelEnum)
  model: ModelEnum;

  @IsMongoId()
  owner_id: string;

  @IsEnum(StatusEnum)
  status: StatusEnum;

  @IsNumber()
  health_level: number;

  @IsMongoId()
  unit_id: string;
}
