import { Controller, Get } from '@nestjs/common';
import { mapUsers } from './user.map';
import { UserUseCasesService } from 'src/infra/nest-use-cases';

@Controller('users')
export class UserController {
  constructor(private userUseCases: UserUseCasesService) {}

  @Get()
  async getPeople() {
    const people = await this.userUseCases.getUsers();
    return mapUsers(people);
  }
}
