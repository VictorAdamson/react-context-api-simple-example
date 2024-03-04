import { useState, useContext } from "react";
import { AppContext } from "../App";

const INITIAL_POST = {
  title: "",
  content: "",
};

const getPostFromLocalStorage = () => {
  const postFromLocalStorage = localStorage.getItem("wipPost");
  if (postFromLocalStorage !== null && postFromLocalStorage !== undefined) {
    console.log("Loading data from local storage", postFromLocalStorage);
    return JSON.parse(postFromLocalStorage);
  } else {
    console.log("Loading inital data");
    return { ...INITIAL_POST };
  }
};
export default function CreatePost() {
  const context = useContext(AppContext);
  const [post, setPost] = useState(getPostFromLocalStorage());

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setWipPost = {
      ...post,
      [name]: value,
    };
    setPost(setWipPost);
    localStorage.setItem("wipPost", JSON.stringify(setWipPost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    context.setPosts([...context.posts, post]);
    setPost(INITIAL_POST);
    localStorage.removeItem("wipPost");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={post.title}
        ></input>
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
          cols={50}
          rows={5}
        ></textarea>
      </label>
      <br />
      <input type="submit" value="Post!"></input>
    </form>
  );
}
