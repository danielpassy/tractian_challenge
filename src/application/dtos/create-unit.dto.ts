import { Type } from 'class-transformer';
import {
  IsMongoId,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

export class LocalizationDto {
  @IsNumber()
  lat: number;
  @IsNumber()
  lng: number;
  @IsString()
  address: string;
}

export class CreateUnitDto {
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => LocalizationDto)
  localization: LocalizationDto;

  @IsString()
  name: string;
}
