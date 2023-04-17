export class EmailAlreadyUsedError extends Error {
  constructor() {
    super('This Email is already associated with an account');
    this.name = 'EmailAlreadyUsed';
  }
}

export class UserNotFoundError extends Error {
  constructor() {
    super('User with this email not found');
    this.name = 'UserNotFound';
  }
}
