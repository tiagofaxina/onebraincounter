import { BaseException } from './base.exception';

export class CountersStorageSaveException extends BaseException {
  constructor(reason?: string) {
    super('Error to save counters data', reason);
  }
}
