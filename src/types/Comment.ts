import { DatabaseObject } from './Api'

export type Comment = DatabaseObject & {
  body: string;
  imageId: number;
  parentCommentId?: number | null;
}
