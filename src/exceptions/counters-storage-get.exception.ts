import { BaseException } from './base.exception';

export class CountersStorageGetException extends BaseException {
  constructor(reason?: string) {
    super('Error to get data from counters storage', reason);
  }
}
