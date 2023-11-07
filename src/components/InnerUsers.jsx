import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
const API = `https://jsonplaceholder.typicode.com/comments`;

const InnerUsers = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    try {
      const getPosts = async () => {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setUser(data);
      };
      getPosts();
    } catch (error) {}
  }, [id]);
  return (
    <Conteiner>
      <Section>
        <h3>{user.userId}</h3>
        <h3>id: {user.id}</h3>
        <h3>title: {user.title}</h3>
        <h3>body: {user.body}</h3>
      </Section>
      <Link to="..">Back to all users</Link>
    </Conteiner>
  );
};
export default InnerUsers;

const Conteiner = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Section = styled.div`
  width: 80%;
  border: 1px solid black;
`;
