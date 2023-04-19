import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { ModelEnum } from '../const/model.const';
import { StatusEnum } from '../const/status.const';

export class CreateAssetDto {
  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsEnum(ModelEnum)
  model: ModelEnum;

  @IsNotEmpty()
  @IsString()
  owner_name: string;

  @IsNotEmpty()
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @Max(100)
  @Min(0)
  @IsNumber()
  health_level: number;

  @IsMongoId()
  unit_id: string;
}
