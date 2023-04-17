import { Model } from 'mongoose';
import { IGenericRepository } from './generic.repository';

export class MongoBaseRepository<T> implements IGenericRepository<T> {
  _mongoDocument: Model<any & Document>;

  constructor(repository: Model<any & Document>) {
    this._mongoDocument = repository;
  }

  getAll(): Promise<T[]> {
    return this._mongoDocument.find().exec();
  }

  get(id: any): Promise<T> {
    return this._mongoDocument.findById(id).exec();
  }

  create(item: T): Promise<T> {
    return this._mongoDocument.create(item);
  }

  update(id: string, item: T) {
    return this._mongoDocument.findByIdAndUpdate(id, item);
  }
}
