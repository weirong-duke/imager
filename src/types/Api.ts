export type PostData<T> = Omit<T, 'id'>;

export interface DatabaseObject {
  id: number;
}
