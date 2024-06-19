import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
