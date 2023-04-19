import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/application/dtos';
import { RegisterDto } from 'src/application/dtos/register.dto';
import {
  EmailAlreadyUsedError,
  IncorrectPasswodError,
  UserNotFoundError,
} from 'src/application/errors';
import { AuthUseCases } from 'src/application/use-cases';
import { Public } from 'src/infra/auth/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authUseCases: AuthUseCases) {}

  @Public()
  @Post('/register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      return await this.authUseCases.register(registerDto);
    } catch (error) {
      if (error instanceof EmailAlreadyUsedError) {
        return { error: 'This email was already used' };
      } else {
        throw error;
      }
    }
  }

  @Public()
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    try {
      return await this.authUseCases.login(loginDto);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return { error: 'User not found' };
      } else if (error instanceof IncorrectPasswodError) {
        return { error: 'Incorrect password' };
      } else {
        throw error;
      }
    }
  }
}
