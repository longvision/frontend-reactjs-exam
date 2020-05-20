import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import {
  Container,
  WhitePanel,
  Form,
  Title,
  IconImg,
  Arrow,
  RedPanel,
  Return,
  InfoText,
  Message,
  Card,
} from "./styles";
import BreadCrumbs from "../../containers/breadcrumbs";
import CreditCard from "../../components/CreditCard";

function CheckoutScreen() {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  return (
    <Container>
      <RedPanel>
        <Return>
          <Arrow />
          <InfoText>Alterar forma de pagamento</InfoText>
        </Return>
        <Message>
          <IconImg />
          <Title>Adicione um novo cartão de crédito</Title>
        </Message>
        <Card>
          <CreditCard
            cvc="999"
            expiry="0551"
            focused="expiry"
            name="Ricardo"
            number="90349934934234556"
            callback={() => {}}
          />
        </Card>
      </RedPanel>
      <WhitePanel>
        <BreadCrumbs />
        <Form></Form>
      </WhitePanel>
    </Container>
  );
}

export default CheckoutScreen;
