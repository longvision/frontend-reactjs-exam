import React from "react";

import demo from "../../assets/demo.svg";
import logo from "../../assets/logo.svg";
import { Container, MenuItems, LogoItems, Item } from "./styles";
//
function NavBar() {
  return (
    <Container>
      <LogoItems>
        <img src={logo} />

        <img src={demo} />
      </LogoItems>
      <MenuItems>
        <Item>
          <p />
        </Item>
        <Item>
          <p />
        </Item>
        <Item>
          <p />
        </Item>
        <Item>
          <p />
        </Item>
        <Item>
          <p />
        </Item>
      </MenuItems>
    </Container>
  );
}

export default NavBar;
