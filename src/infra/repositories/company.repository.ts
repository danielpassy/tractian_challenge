import { CompanyEntity } from 'src/domain/entities';
import { MongoBaseRepository } from './mongo-base.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from '../db/company.schema';

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
