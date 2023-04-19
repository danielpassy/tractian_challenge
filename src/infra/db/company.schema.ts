import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CompanyEntity } from 'src/domain/entities';

export type CompanyDocument = HydratedDocument<Company>;
@Schema()
export class Company {
  @Prop()
  name: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);

CompanySchema.methods.toEntity = function (): CompanyEntity {
  const entity = this.toObject({
    versionKey: false,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
    },
  });
  return entity as CompanyEntity;
};
