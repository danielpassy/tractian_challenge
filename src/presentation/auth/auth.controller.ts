import { Body, Controller, Post } from '@nestjs/common';
import { error } from 'console';
import { LoginDto } from 'src/application/dtos';
import { UserNotFoundError } from 'src/application/errors';
import { AuthUseCases } from 'src/application/use-cases';

@Controller('auth')
export class AuthController {
  constructor(private authUseCases: AuthUseCases) {}

  @Post()
  async login(@Body() loginDto: LoginDto) {
    try {
      return await this.authUseCases.login(loginDto);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return { error: 'User not found' };
      } else {
        throw error;
      }
    }
  }
}
