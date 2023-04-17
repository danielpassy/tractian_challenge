import { UserEntity } from 'src/domain/entities';
import { IAuth } from '../interfaces';
import { EmailAlreadyUsedError, UserNotFoundError } from '../errors';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/infra/repositories';

export class AuthUseCases implements IAuth {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UserNotFoundError();
    }

    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(
    email: string,
    password: string,
    name: string,
  ): Promise<UserEntity> {
    const userEntry = await this.userRepository.findByEmail(email);
    if (!userEntry) {
      throw new EmailAlreadyUsedError();
    }
    const user = new UserEntity({ email, password, name });
    return this.userRepository.create(user);
  }
}
