import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUser] = useState([]);
  const [error, setError] = useState("");

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (error) {
    return <div>Error:{error}</div>;
  }

  return (
    <TabelContainer>
      <h1>Users</h1>
      <Table>
        <Tr>
          <th>name</th>
          <th>username</th>
          <th>id</th>
        </Tr>
        {users.map(({ name, username, id }) => {
          return (
            <Tr>
              <Td>{name}</Td>
              <Td>{username}</Td>
              <Td>{id}</Td>
              <Td>
                <Link to={id.toString()}>get more</Link>
              </Td>
            </Tr>
          );
        })}
      </Table>
    </TabelContainer>
  );
};

export default Users;

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
