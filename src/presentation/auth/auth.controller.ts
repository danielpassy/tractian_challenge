import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/application/dtos';
import {
  EmailAlreadyUsedError,
  IncorrectPasswodError,
  UserNotFoundError,
} from 'src/application/errors';
import { AuthUseCases } from 'src/application/use-cases';

@Controller('auth')
export class AuthController {
  constructor(private authUseCases: AuthUseCases) {}

  @Post('/register')
  async register(@Body() loginDto: LoginDto) {
    try {
      return await this.authUseCases.register(loginDto);
    } catch (error) {
      if (error instanceof EmailAlreadyUsedError) {
        return { error: 'This email was already used' };
      } else {
        throw error;
      }
    }
  }

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
