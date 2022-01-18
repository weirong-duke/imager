import {DatabaseObject} from "./Api";
import { Comment } from './Comment';

export interface Image extends DatabaseObject {
  comments?: Comment[];
  data: string;
  details?: string;
  fileName: string;
  lastCommentDate?: string;
  name?: string;
  size: number;
}
