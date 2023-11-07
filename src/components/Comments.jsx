import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getCartoonCards = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments?_limit=10"
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getCartoonCards();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <TabelContainer>
      <h1>Comments</h1>
      <Table>
        <tbody>
          <Tr>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </Tr>
          {comments.map(({ id, email }) => {
            return (
              <Tr key={id}>
                <Td>{id}</Td>
                <Td>{email}</Td>
                <Td>{email}</Td>
                <Td>
                  <Link to={id.toString()}>get more</Link>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </Table>
    </TabelContainer>
  );
};

export default Comments;

const Table = styled.table`
  border: 1px solid black;
  width: 65rem;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  text-align: left;
  &:nth-child(even) {
    padding: 8px;
    background-color: #dddddd;
  }
`;

const TabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  padding-top: 0;
`;
const Td = styled.td`
  padding: 10px;
  text-align: left;
`;
