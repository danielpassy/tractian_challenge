import { UserEntity } from 'src/domain/entities';
import { UserRepository } from 'src/infra/repositories';

export class UserUseCases {
  constructor(private userRepository: UserRepository) {}

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.getAll();
    return users;
  }
}
