import { Model } from 'mongoose';

export abstract class MongoBaseRepository<T> {
  _mongoDocument: Model<any & Document>;

  constructor(repository: Model<any & Document>) {
    this._mongoDocument = repository;
  }

  async getAll(): Promise<T[]> {
    const entries = await this._mongoDocument.find().exec();
    return entries.map((e) => e.toEntity());
  }

  async get(id: any): Promise<T | null> {
    const entry = await this._mongoDocument.findById(id).exec();
    return entry?.toEntity() || null;
  }

  async create(item: T): Promise<T> {
    const entry = await this._mongoDocument.create(item);
    return entry.toEntity();
  }

  update(id: string, item: T) {
    return this._mongoDocument.findByIdAndUpdate(id, item);
  }
}
