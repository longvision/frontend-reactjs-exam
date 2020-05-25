import React from "react";

import {
  Container,
  DeskContainer,
  //   Title,
  //   IconImg,
  //   RedPanel,
} from "./styles";
import NavBar from "../../components/NavBar";
import CheckoutScreen from "../CheckoutScreen/index";
import SideFeed from "../../components/SideFeed";

const ShopScreen = () => {
  return (
    <Container>
      <NavBar />
      <DeskContainer>
        <CheckoutScreen />
        <SideFeed />
      </DeskContainer>
    </Container>
  );
};

export default ShopScreen;
