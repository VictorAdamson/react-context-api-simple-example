import { useState, createContext } from "react";
import CreatePost from "./components/CreatePost.jsx";
import Header from "./components/Header.jsx";
import Posts from "./components/Posts.jsx";
import "./App.css";

const AppContext = createContext();
const APP_NAME = "Next-gen Social Media";

function App() {
  const [posts, setPosts] = useState([
    { title: "Hello, world!", content: "React context is great :)" },
    { title: "But...", content: "It's a little confusing at first!" },
  ]);

  return (
    <AppContext.Provider value={{ appName: APP_NAME, posts, setPosts }}>
      <Header />
      <CreatePost />
      <Posts />
    </AppContext.Provider>
  );
}

export { AppContext, App };
