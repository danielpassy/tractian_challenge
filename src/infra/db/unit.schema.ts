import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Localization, UnitEntity } from 'src/domain/entities';
import { Asset } from './asset.schema';

export type UnitDocument = HydratedDocument<Unit>;
@Schema()
export class Unit {
  @Prop()
  name: string;

  @Prop()
  id: string;

  @Prop(
    raw({
      lat: { type: Number },
      lng: { type: Number },
      address: { type: String },
    }),
  )
  localization: Localization;

  @Prop()
  createdAt: Date;
}

export const UnitSchema = SchemaFactory.createForClass(Unit);

UnitSchema.methods.toEntity = function (): UnitEntity {
  const entity = this.toObject({
    versionKey: false,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
    },
  });
  return entity as UnitEntity;
};
