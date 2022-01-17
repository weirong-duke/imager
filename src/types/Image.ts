import {DatabaseObject} from "./Api";

export interface Image extends DatabaseObject {
  data: string;
  name: string;
  size: number;
}
