import { Model } from 'mongoose';
import { IGenericRepository } from './generic.repository';

export class MongoBaseRepository<T> implements IGenericRepository<T> {
  _mongoDocument: Model<any & Document>;

  constructor(repository: Model<any & Document>) {
    this._mongoDocument = repository;
  }

  async getAll(): Promise<T[]> {
    const entries = await this._mongoDocument.find().exec();
    return entries.map((e) => e.toEntity());
  }

  async get(id: any): Promise<T> {
    const entry = await this._mongoDocument.findById(id).exec();
    return entry.toEntity();
  }

  create(item: T): Promise<T> {
    return this._mongoDocument.create(item);
  }

  update(id: string, item: T) {
    return this._mongoDocument.findByIdAndUpdate(id, item);
  }
}
