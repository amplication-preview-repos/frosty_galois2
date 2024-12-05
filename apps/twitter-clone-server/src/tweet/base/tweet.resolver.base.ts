/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Tweet } from "./Tweet";
import { TweetCountArgs } from "./TweetCountArgs";
import { TweetFindManyArgs } from "./TweetFindManyArgs";
import { TweetFindUniqueArgs } from "./TweetFindUniqueArgs";
import { CreateTweetArgs } from "./CreateTweetArgs";
import { UpdateTweetArgs } from "./UpdateTweetArgs";
import { DeleteTweetArgs } from "./DeleteTweetArgs";
import { LikeFindManyArgs } from "../../like/base/LikeFindManyArgs";
import { Like } from "../../like/base/Like";
import { User } from "../../user/base/User";
import { TweetService } from "../tweet.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tweet)
export class TweetResolverBase {
  constructor(
    protected readonly service: TweetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tweet",
    action: "read",
    possession: "any",
  })
  async _tweetsMeta(
    @graphql.Args() args: TweetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tweet])
  @nestAccessControl.UseRoles({
    resource: "Tweet",
    action: "read",
    possession: "any",
  })
  async tweets(@graphql.Args() args: TweetFindManyArgs): Promise<Tweet[]> {
    return this.service.tweets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tweet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tweet",
    action: "read",
    possession: "own",
  })
  async tweet(
    @graphql.Args() args: TweetFindUniqueArgs
  ): Promise<Tweet | null> {
    const result = await this.service.tweet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tweet)
  @nestAccessControl.UseRoles({
    resource: "Tweet",
    action: "create",
    possession: "any",
  })
  async createTweet(@graphql.Args() args: CreateTweetArgs): Promise<Tweet> {
    return await this.service.createTweet({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tweet)
  @nestAccessControl.UseRoles({
    resource: "Tweet",
    action: "update",
    possession: "any",
  })
  async updateTweet(
    @graphql.Args() args: UpdateTweetArgs
  ): Promise<Tweet | null> {
    try {
      return await this.service.updateTweet({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tweet)
  @nestAccessControl.UseRoles({
    resource: "Tweet",
    action: "delete",
    possession: "any",
  })
  async deleteTweet(
    @graphql.Args() args: DeleteTweetArgs
  ): Promise<Tweet | null> {
    try {
      return await this.service.deleteTweet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Like], { name: "likes" })
  @nestAccessControl.UseRoles({
    resource: "Like",
    action: "read",
    possession: "any",
  })
  async findLikes(
    @graphql.Parent() parent: Tweet,
    @graphql.Args() args: LikeFindManyArgs
  ): Promise<Like[]> {
    const results = await this.service.findLikes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Tweet): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
