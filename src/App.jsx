import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import "./App.css";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import Users from "./components/Users";
import SinglePosts from "./components/SinglePosts";
import InnerComments from "./components/InnerComments";
import InnerUsers from "./components/InnerUsers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="comments" element={<Comments />} />
            <Route path="posts" element={<Posts />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="posts/:id" element={<SinglePosts />} />
          <Route path="comments/:id" element={<InnerComments />} />
          <Route path="users/:id" element={<InnerUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
