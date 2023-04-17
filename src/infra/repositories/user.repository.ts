import { UserEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../db/user.schema';
import { Model } from 'mongoose';

export class UserRepository extends MongoBaseRepository<UserEntity> {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super(userModel);
  }
  async findByEmail(email: string): Promise<UserEntity> {
    return this._mongoDocument.findOne({
      email,
    });
  }
}
