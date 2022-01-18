export type PostData<T> = Omit<T, 'id' | 'createdAt'>;

export interface DatabaseObject {
  createdAt: string;
  id: number;
}
