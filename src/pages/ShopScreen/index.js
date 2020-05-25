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
import { useWindowSize } from "../../utils";
const ShopScreen = () => {
  const size = useWindowSize();

  return (
    <Container>
      <NavBar />
      <DeskContainer>
        <CheckoutScreen />
      </DeskContainer>
    </Container>
  );
};

export default ShopScreen;
