import { UserEntity } from 'src/domain/entities';
import { LoginDto } from '../dtos';

export interface IAuth {
  login(loginDto: LoginDto): Promise<{ access_token: string }>;

  register(email: string, password: string, name: string): Promise<UserEntity>;
}
