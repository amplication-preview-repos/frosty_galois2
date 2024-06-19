import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  follower?: SortOrder;
  following?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
