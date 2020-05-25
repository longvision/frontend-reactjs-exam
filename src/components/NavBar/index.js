import React from "react";

import demo from "../../assets/demo.svg";
import logo from "../../assets/logo.svg";
import { Container, MenuItems, Item } from "./styles";
//
function NavBar() {
  return (
    <Container>
      <div
        style={{
          justifyContent: "space-between",
          displayDirection: "row",
          display: "flex",
          width: 260,
          marginLeft: 277,
        }}
      >
        <img src={logo} />
        <img src={demo} />
      </div>
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
