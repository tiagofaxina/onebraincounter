import { BaseException } from './base.exception';

export class StorageGetException extends BaseException {
  constructor(reason?: string) {
    super('Error to get data from storage', reason);
  }
}
