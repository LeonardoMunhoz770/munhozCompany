import React from "react";
import { Container } from "./style";

const SidebarItem = ({ Text, Icon }) => {
  return (
    <Container>
      {Icon}
      {Text}
    </Container>
  );
};

export default SidebarItem;
