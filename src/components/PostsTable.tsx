import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllPostsAction } from "../redux/PostsState";
import Post from "../interfaces/Post";

interface PostsTableProps {}

const PostsTable: FunctionComponent<PostsTableProps> = () => {
  // קבלת מידע מהסטור
  let posts = useSelector((state: any) => state.postsState.posts);

  // שליחת מידע לסטור
  let dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => dispatch(setAllPostsAction(posts)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1 className="text-center">POSTS TABLE</h1>
      {posts.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>User Id</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: Post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>{post.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No posts</p>
      )}
    </>
  );
};

export default PostsTable;
