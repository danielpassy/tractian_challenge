import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ModelEnum } from 'src/application/const/model.const';
import { StatusEnum } from 'src/application/const/status.const';

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
  owner_id: string;
  @Prop()
  status: StatusEnum;
  @Prop()
  health_level: number;
  @Prop()
  id: string;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
