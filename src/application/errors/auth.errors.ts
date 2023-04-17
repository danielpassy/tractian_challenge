export class EmailAlreadyUsedError extends Error {
  constructor() {
    super('This Email is already associated with an account');
    this.name = 'EmailAlreadyUsed';
  }
}

export class UserNotFoundError extends Error {
  constructor() {
    super('User was not found');
    this.name = 'UserNotFound';
  }
}
