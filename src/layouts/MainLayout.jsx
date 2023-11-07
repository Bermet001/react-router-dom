import { Outlet } from "react-router-dom/dist";
import Menu from "../components/Menu";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Nav>
      <Menu />
      <Outlet />
    </Nav>
  );
};

export default MainLayout;

const Nav = styled.div`
  display: flex;
`;
