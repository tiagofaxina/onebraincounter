import { BaseException } from './base.exception';

export class StorageSaveException extends BaseException {
  constructor(reason?: string) {
    super('Error to save data', reason);
  }
}
