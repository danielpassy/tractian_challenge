import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ModelEnum } from 'src/application/const/model.const';
import { StatusEnum } from 'src/application/const/status.const';
import { AssetEntity } from 'src/domain/entities';
import { User } from './user.schema';
import { Unit } from './unit.schema';

export type AssetDocument = HydratedDocument<Asset>;
@Schema()
export class Asset {
  @Prop()
  image: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  model: ModelEnum;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' })
  assets: Unit[];

  @Prop()
  status: StatusEnum;

  @Prop()
  health_level: number;

  @Prop()
  id: string;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);

AssetSchema.methods.toEntity = function (): AssetEntity {
  const entity = this.toObject({
    versionKey: false,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
    },
  });
  return entity as AssetEntity;
};
