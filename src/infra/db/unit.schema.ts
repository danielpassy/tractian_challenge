import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Localization } from 'src/domain/entities';

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
