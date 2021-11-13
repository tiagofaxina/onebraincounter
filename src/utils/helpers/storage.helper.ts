import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageGetException, StorageSaveException } from '../../exceptions';

import { IStorageHelper } from './storage.helper.interface';

export class StorageHelper implements IStorageHelper {
  constructor(private readonly key: string) {}

  save = async <D = any>(data: D): Promise<void> => {
    try {
      await AsyncStorage.setItem(this.key, JSON.stringify(data));
    } catch (error: any) {
      throw new StorageSaveException(error.mesage);
    }
  };

  get = async <D>(): Promise<D | null> => {
    try {
      const dataStored = await AsyncStorage.getItem(this.key);

      return dataStored ? (JSON.parse(dataStored) as D) : null;
    } catch (error: any) {
      throw new StorageGetException(error.mesage);
    }
  };
}
