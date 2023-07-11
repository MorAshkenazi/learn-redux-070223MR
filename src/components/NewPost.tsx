import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { addPostAction } from "../redux/PostsState";

interface NewPostProps {}

const NewPost: FunctionComponent<NewPostProps> = () => {
  let posts = useSelector((state: any) => state.postsState.posts);
  let dispatch = useDispatch();
  let formik = useFormik({
    initialValues: { userId: 0, title: "", body: "" },
    validationSchema: yup.object({
      userId: yup.number().required(),
      title: yup.string().required().min(2),
      body: yup.string().required().min(2),
    }),
    onSubmit: (values, { resetForm }) => {
      let newPost = { id: posts.length + 1, ...values };
      console.log(newPost);
      dispatch(addPostAction(newPost));
      resetForm();
      formik.setFieldValue("userId", "");
    },
  });
  return (
    <>
      <h1>NEW POST</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="number"
          placeholder="User Id"
          name="userId"
          onChange={formik.handleChange}
          value={formik.values.userId}
          onBlur={formik.handleBlur}
        />
        {formik.touched.userId && formik.errors.userId && (
          <p className="text-danger">{formik.errors.userId}</p>
        )}
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <p className="text-danger">{formik.errors.title}</p>
        )}
        <input
          type="text"
          placeholder="Body"
          name="body"
          onChange={formik.handleChange}
          value={formik.values.body}
          onBlur={formik.handleBlur}
        />
        {formik.touched.body && formik.errors.body && (
          <p className="text-danger">{formik.errors.body}</p>
        )}
        <button
          type="submit"
          className="btn btn-info"
          disabled={!formik.isValid || !formik.dirty}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default NewPost;
