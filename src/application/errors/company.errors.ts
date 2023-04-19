export class CompanyAlreadyRegisteredError extends Error {
  constructor() {
    super('This name is already in Use');
    this.name = 'CompanyAlreadyRegisteredError';
  }
}
