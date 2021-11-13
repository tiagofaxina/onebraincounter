export type Counter = {
  id: string;
  name: string;
  count: number;
};

export interface ICountersStorageHelper {
  save: (data: Counter[]) => Promise<void>;
  get: () => Promise<Counter[]>;
}
