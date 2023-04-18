import { UserEntity } from 'src/domain/entities';
import { UserRepository } from 'src/infra/repositories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserUseCases {
  constructor(private userRepository: UserRepository) {}

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}
