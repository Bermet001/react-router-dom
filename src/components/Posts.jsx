import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Posts = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getCartoonCards = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const data = await response.json();
        setCards(data);
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
      <h1>Posts</h1>
      <Table>
        <tbody>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {cards.map(({ id, title, body }) => {
            return (
              <Tr key={id}>
                <Td>{id}</Td>
                <Td>{title}</Td>
                <Td>{body}</Td>
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

export default Posts;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 65rem;
`;

const Tr = styled.tr`
  text-align: left;
  &:nth-child(even) {
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
