import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserEntity } from 'src/domain/entities';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
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
