export class UserEntity {
  public constructor(init?: Partial<UserEntity>) {
    Object.assign(this, init);
  }
  email: string;
  password: string;
  userId: string;
  name: string;
  id?: any;
}
