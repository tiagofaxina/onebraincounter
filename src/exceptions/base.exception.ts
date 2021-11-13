export class BaseException extends Error {
  constructor(
    public readonly message: string,
    public readonly reason?: string,
  ) {
    super();

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
