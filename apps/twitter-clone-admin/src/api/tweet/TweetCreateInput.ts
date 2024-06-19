import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
