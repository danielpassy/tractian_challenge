import { Model } from 'mongoose';
import { IGenericRepository } from './generic.repository';

export class MongoBaseRepository<T> implements IGenericRepository<T> {
  private _mongoDocument: Model<T>;

  constructor(mongoDocument: Model<T>) {
    this._mongoDocument = mongoDocument;
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

  async findOne(query: any, select?: keyof T) {
    const data = await this.MongooseModel.findOne(query, select);
    if (!data) return null;

    return this.mapEntity(data.toObject());
  }
}
