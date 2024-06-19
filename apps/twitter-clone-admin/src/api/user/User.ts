import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { Tweet } from "../tweet/Tweet";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  roles: JsonValue;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string;
};
