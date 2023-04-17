export interface IGenericRepository<T> {
  // async count(query: any): Promise<number> {
  //   return await this.MongooseModel.countDocuments(query);
  // }

  // async aggregate(query: any[]): Promise<any> {
  //   return await this.MongooseModel.aggregate(query);
  // }

  // async findById(id: string, select?: keyof T): Promise<any> {
  //   return await this.MongooseModel.findById(id, select);
  // }

  // async findOne(query: any, select?: keyof T) {
  //   const data = await this.MongooseModel.findOne(query, select);
  //   if (!data) return null;

  //   return this.mapEntity(data.toObject());
  // }

  delete(query: any);
  find(
    query: any,
    select: any,
    options: { limit?: number; sort?: any; skip?: number },
  ): Promise<T[]>;

  create(data: Partial<T>): Promise<T>;

  createMany(data: T[]): Promise<T[]>;

  // update(
  //   query: any,
  //   updateBody: any,
  // ): Promise<{
  //   matched: number;
  //   modified: number;
  // }>;

  getAll(): Promise<T[]>;
  get(id: number): Promise<T>;
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
}
