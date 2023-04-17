export class UnitNotFoundError extends Error {
  constructor() {
    super('Unit was not found');
    this.name = 'UnitNotFound';
  }
}
