import { UserEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-abstract.repository';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../db/user.schema';
import { Model } from 'mongoose';

export class UserRepository extends MongoBaseRepository<UserEntity> {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super(userModel);
  }
  async getByName(name: string): Promise<UserEntity> | null {
    const a = await this._mongoDocument.find({
      name,
    });
    return a[0] || null;
  }

  async findByEmail(email: string): Promise<UserEntity> | null {
    const a = await this._mongoDocument.find({
      email,
    });
    return a[0];
  }
}
