import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserUseCases } from 'src/application/use-cases';
import { mapUsers } from './user.map';
import { JwtAuthGuard } from 'src/infra/auth/jwt.guard';

@Controller('users')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getPeople() {
    const people = await this.userUseCases.getUsers();
    return mapUsers(people);
  }
}
