import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserUseCases } from 'src/application/use-cases';
import { mapUsers } from './user.map';

@Controller('users')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async getPeople() {
    const people = await this.userUseCases.getUsers();
    return mapUsers(people);
  }
}
