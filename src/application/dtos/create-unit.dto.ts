import { Type } from 'class-transformer';
import {
  IsMongoId,
  IsNotEmpty,
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

  @IsNotEmpty()
  @IsString()
  name: string;
}
