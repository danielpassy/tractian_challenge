import { UserEntity } from 'src/domain/entities';
import { EmailAlreadyUsedError, UserNotFoundError } from '../errors';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/infra/repositories';
import { LoginDto } from '../dtos';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthUseCases {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    // const user = await this.userRepository.findByEmail(loginDto.email);
    // if (!user) {
    //   throw new UserNotFoundError();
    // }

    const payload = { email: loginDto.email, sub: 123 };
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
