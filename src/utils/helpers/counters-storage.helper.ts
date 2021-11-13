import {
  CountersStorageGetException,
  CountersStorageSaveException,
} from '../../exceptions';
import { StorageHelper } from './storage.helper';
import {
  Counter,
  ICountersStorageHelper,
} from './counters-storage.helper.interface';

import { IStorageHelper } from './storage.helper.interface';

class CountersStorageHelper implements ICountersStorageHelper {
  constructor(private readonly storageHelper: IStorageHelper) {}

  save = async (data: Counter[]): Promise<void> => {
    try {
      await this.storageHelper.save<Counter[]>(data);
    } catch (error: any) {
      throw new CountersStorageSaveException(error.mesage);
    }
  };

  get = async (): Promise<Counter[]> => {
    try {
      const dataStored = await this.storageHelper.get<Counter[]>();

      return dataStored ?? [];
    } catch (error: any) {
      throw new CountersStorageGetException(error.mesage);
    }
  };
}

export const countersStorageHelper = new CountersStorageHelper(
  new StorageHelper('@onebraincounter:counters'),
);
