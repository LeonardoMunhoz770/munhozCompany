import { BsListUl } from "react-icons/bs";
import { Container } from "./style";
import React, { useState } from "react";
import SideBar from "../sideBar";

export const Header = () => {
  const [sideBarShow, setSideBarShow] = useState(false);

  const showSideBar = () => {
    setSideBarShow(!sideBarShow);
  };

  return (
    <Container>
      <BsListUl onClick={showSideBar} color="white" />
      {sideBarShow && <SideBar active={setSideBarShow} />}
    </Container>
  );
};

export default Header;
