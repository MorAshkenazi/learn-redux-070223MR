import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import Post from "../interfaces/Post";

interface PostsListProps {}

const PostsList: FunctionComponent<PostsListProps> = () => {
  let posts = useSelector((state: any) => state.postsState.posts);
  return (
    <>
      <h1>POSTS LIST</h1>
      {posts.length ? (
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>No posts</p>
      )}
    </>
  );
};

export default PostsList;
