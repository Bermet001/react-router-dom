import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <NavBar>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="posts"
      >
        Posts
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="comments"
      >
        Comments
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="users"
      >
        Users
      </NavLink>
    </NavBar>
  );
};

export default Menu;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkslategray;
  padding: 15px;
  width: 17.75rem;
  gap: 50px;
`;
