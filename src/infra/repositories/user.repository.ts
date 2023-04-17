import { UserEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';

export class UserRepository extends MongoBaseRepository<UserEntity> {
  async findByEmail(email: string): Promise<UserEntity> {
    return this.findOne({
      email,
    });
  }
  async userExists(userId: string): Promise<boolean> {
    return !!(await this.findOne(
      {
        _id: userId,
      },
      '_id',
    ));
  }
}
