import { AssetEntity, CompanyEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from '../db/Company.schema';
import { Model } from 'mongoose';

export class CompanyRepository extends MongoBaseRepository<CompanyEntity> {
  constructor(
    @InjectModel(Company.name) private userModel: Model<CompanyDocument>,
  ) {
    super(userModel);
  }
  async getByName(name: string): Promise<CompanyEntity> | null {
    const a = await this._mongoDocument.find({
      name,
    });
    return a[0] || null;
  }
}
