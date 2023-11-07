import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
const API = `https://jsonplaceholder.typicode.com/posts`;

const SinglePosts = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    try {
      const getPosts = async () => {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setPost(data);
      };
      getPosts();
    } catch (error) {}
  }, [id]);

  return (
    <Conteiner>
      <InnerDiv>
        <h3>id: {post.id}</h3>
        <h3>{post.name}</h3>
        <h3>{post.email}</h3>
        <h3>title: {post.title}</h3>
        <h3>body: {post.body}</h3>
      </InnerDiv>
      <Link to="..">Back to all posts</Link>
    </Conteiner>
  );
};
export default SinglePosts;

const Conteiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InnerDiv = styled.div`
  width: 80%;
  border: 1px solid black;
`;
