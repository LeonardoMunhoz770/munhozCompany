import { FaTimes } from "react-icons/fa";
import { Container, Content, ContentAccount, ContentLogout } from "./style";
import SidebarItem from "./sideBarItem";
import {
  AiOutlineHome,
  AiFillSetting,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SideBar = ({ active }) => {
  const closeSideBar = () => {
    active(false);
  };

  const name = localStorage.getItem("displayName");

  const clearUser = () => {
    localStorage.clear();
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSideBar} />
      <Content>
        <ContentAccount>Olá, {name}</ContentAccount>
        <NavLink to={"/homePage"} style={{ textDecoration: "none" }}>
          <SidebarItem Icon={<AiOutlineHome />} Text="Home" />
        </NavLink>
        <NavLink to={"/account"} style={{ textDecoration: "none" }}>
          <SidebarItem Icon={<AiOutlineUser />} Text="Conta" />
        </NavLink>
        <NavLink to={"/configuration"} style={{ textDecoration: "none" }}>
          <SidebarItem Icon={<AiFillSetting />} Text="Configurações" />
        </NavLink>
      </Content>
      <ContentLogout>
        <NavLink to={"/"}>
          <AiOutlineLogout color="white" size={25} onClick={clearUser} />
        </NavLink>
      </ContentLogout>
    </Container>
  );
};

export default SideBar;
