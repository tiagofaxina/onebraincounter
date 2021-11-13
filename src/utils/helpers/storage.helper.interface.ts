export interface IStorageHelper {
  save: <D = any>(data: D) => Promise<void>;
  get: <D>() => Promise<D | null>;
}
