import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';
import { UserEntity } from 'src/domain/entities';

const userShema = new Schema({
  name: Schema.Types.String,
  email: Schema.Types.String,
  password: Schema.Types.String,
});

interface IUserDocument extends UserEntity, Document {
  _id: string;
}

export const UserModel =
  mongoose.models.Company || mongoose.model<IUserDocument>('User', userShema);
