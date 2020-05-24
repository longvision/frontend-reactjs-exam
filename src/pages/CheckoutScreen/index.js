import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";

import { TextField, Button } from "@material-ui/core";
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
  SubmitContainer,
  SemiInputContainer1,
  SemiInputContainer,
  SensibleInputContainer,
  Message,
  Label,
  Label1,
  Label2,
  SemiInput,
  InputContainer,
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
      </RedPanel>
      <Card>
        <CreditCard
          cvc="999"
          expiry="0551"
          focused="expiry"
          name="Ricardo"
          number="******************"
          callback={() => {}}
        />
      </Card>
      <WhitePanel>
        <BreadCrumbs />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            width: "100%",
            marginTop: 50,
          }}
        >
          <form
            style={{
              flexDirection: "column",
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InputContainer>
              <TextField
                style={{
                  width: "99%",
                  fontSize: 22,
                }}
                name="number"
                size="medium"
                placeholder="Número do cartão"
                type="input"
              />
            </InputContainer>
            <InputContainer>
              <TextField
                style={{
                  width: "99%",

                  fontSize: 22,
                }}
                name="number"
                placeholder="Nome (Igual ao cartão)"
                type="input"
              />
            </InputContainer>
            <SemiInputContainer>
              <div style={{ width: "48%" }}>
                <TextField
                  name="number"
                  style={{ alignItems: "flex-start" }}
                  fullWidth={true}
                  type="input"
                  placeholder="Validade"
                />
              </div>
              <div style={{ width: "48%" }}>
                <TextField
                  name="number"
                  fullWidth={true}
                  style={{ alignItems: "flex-end" }}
                  type="input"
                  placeholder="CVV"
                />
              </div>
            </SemiInputContainer>

            <InputContainer>
              <TextField
                style={{
                  width: "99%",

                  fontSize: 22,
                }}
                name="number"
                placeholder="Número do parcelas"
                type="input"
              />
            </InputContainer>

            <SubmitContainer>
              <Button
                type="submit"
                color="default"
                style={{
                  width: 246,
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 22,
                  backgroundColor: "#de4b4b",
                }}
                size="small"
                variant="contained"
                color="primary"
                value="Submit"
              >
                CONTINUAR
              </Button>
            </SubmitContainer>
          </form>
        </div>
      </WhitePanel>
    </Container>
  );
}

export default CheckoutScreen;
