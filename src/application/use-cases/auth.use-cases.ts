import { UserEntity } from 'src/domain/entities';
import {
  EmailAlreadyUsedError,
  IncorrectPasswodError,
  UserNotFoundError,
} from '../errors';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/infra/repositories';
import { LoginDto } from '../dtos';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '../dtos/register.dto';

export class AuthUseCases {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userRepository.findByEmail(loginDto.email);
    if (!user) {
      throw new UserNotFoundError();
    }
    const isCorrectPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isCorrectPassword) {
      throw new IncorrectPasswodError();
    }

    const payload = { email: loginDto.email, sub: 123 };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<{ access_token: string }> {
    const userEntry = await this.userRepository.findByEmail(registerDto.email);
    if (userEntry) {
      throw new EmailAlreadyUsedError();
    }
    const passwordHash = await bcrypt.hash(registerDto.password, 10);

    const user = new UserEntity({
      email: registerDto.email,
      password: passwordHash,
      name: registerDto.name,
      company_id: registerDto.company_id,
    });
    await this.userRepository.create(user);
    const payload = { email: user.email, sub: user.password };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
