import { UserEntity } from 'src/domain/entities';

export interface IAuth {
  login(email: string, password: string): Promise<{ access_token: string }>;

  register(email: string, password: string, name: string): Promise<UserEntity>;
}
