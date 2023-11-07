import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
const API = `https://jsonplaceholder.typicode.com/comments`;

const InnerComments = () => {
  const [comments, setComments] = useState({});
  const { id } = useParams();
  useEffect(() => {
    try {
      const getPosts = async () => {
        const response = await fetch(`${API}/${id}`);
        const data = await response.json();
        setComments(data);
      };
      getPosts();
    } catch (error) {}
  }, [id]);

  return (
    <Conteiner>
      <InnerDiv>
        <h3>id: {comments.id}</h3>
        <h3>title: {comments.email}</h3>
        <h3>{comments.email}</h3>
        <h3>{comments.username}</h3>
        {/* <h3>{comments.address.street}</h3> */}
      </InnerDiv>
      <Link to=".." relative="path">
        Back to all comments
      </Link>
    </Conteiner>
  );
};
export default InnerComments;

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
