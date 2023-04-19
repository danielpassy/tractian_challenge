import { IsEmail, IsMongoId, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsMongoId()
  company_id: string;
}
