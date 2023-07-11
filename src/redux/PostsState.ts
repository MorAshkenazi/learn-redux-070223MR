import Post from "../interfaces/Post";

// post state - class
export class PostsState {
  public posts: Post[] = [];
}

// action type - enum
export enum PostsActionType {
  AddPost = "AddPost",
  UpdatePost = "UpdatePost",
  DeletePost = "DeletePost",
  SetAllPosts = "SetAllPost",
}

// action - action type & payload  - interface
export interface PostsAction {
  type: PostsActionType;
  payload: any;
}

// action creators - functions
export function addPostAction(newPost: Post) {
  return { type: PostsActionType.AddPost, payload: newPost };
}

export function updatePostAction(updatedPost: Post) {
  return { type: PostsActionType.UpdatePost, payload: updatedPost };
}

export function deletePostAction(id: number) {
  return { type: PostsActionType.DeletePost, payload: id };
}

export function setAllPostsAction(posts: Post[]) {
  return { type: PostsActionType.SetAllPosts, payload: posts };
}

// reducer
export function postsReducer(
  currentState: PostsState = new PostsState(),
  action: PostsAction
) {
  // יצירת עותק נפרד של משתנה הסטייט
  let newState = { ...currentState, posts: [...currentState.posts] };
  switch (action.type) {
    case PostsActionType.AddPost:
      newState.posts.push(action.payload);
      break;
    case PostsActionType.UpdatePost:
      let updatedPostIndex = newState.posts.findIndex(
        (post: Post) => post.id == action.payload.id
      );
      newState.posts[updatedPostIndex] = action.payload;
      break;
    case PostsActionType.DeletePost:
      let deletedPostIndex = newState.posts.findIndex(
        (post: Post) => post.id == action.payload
      );
      newState.posts.splice(deletedPostIndex, 1);

      // newState.posts = newState.posts.filter((post: Post) => post.id != action.payload)
      break;
    case PostsActionType.SetAllPosts:
      newState.posts = action.payload;
      break;
    default:
      break;
  }
  return newState;
}
