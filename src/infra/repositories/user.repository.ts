import { UserEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../db/user.schema';

export class UserRepository extends MongoBaseRepository<UserEntity> {
  constructor(@InjectModel(User.name) private userModel) {
    super(userModel);
  }
  async findByEmail(email: string): Promise<UserEntity> {
    return this._mongoDocument.findOne({
      email,
    });
  }
}
