import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CompanyEntity, UserEntity } from 'src/domain/entities';
import { Company } from './company.schema';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' } })
  company_id: Company;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.methods.toEntity = function (): UserEntity {
  const entity = this.toObject({
    versionKey: false,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
    },
  });
  return entity as UserEntity;
};
