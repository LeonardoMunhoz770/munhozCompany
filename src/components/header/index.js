import { BsListUl } from "react-icons/bs";
import { Container } from "./style";
import React, { useState } from "react";
import SideBar from "../sideBar";

export const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <Container>
      <BsListUl onClick={showSideBar} color="white" />
      {sideBar && <SideBar active={setSideBar} />}
    </Container>
  );
};

export default Header;
