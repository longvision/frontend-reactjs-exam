import React, { useState } from "react";
import { useSelector } from "react-redux";
import "react-credit-cards/lib/styles.scss";
import Card from "react-credit-cards";
import { Button } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import logo from "../../assets/novo-cartao.svg";
import PaymentInputs from "../../components/Input";
import {
  Container,
  WhitePanel,
  Title,
  IconImg,
  RedPanel,
  Return,
  InfoText,
  InfoText1,
  SubmitContainer,
  SemiInputContainer,
  FormContainer,
  Form,
  BreadcrumbsContainer,
  Message,
  CreditCard,
  InputContainer,
} from "./styles";

import BreadCrumbs from "../../components/Breadcrumbs";

import { useWindowSize } from "../../utils";

function CheckoutScreen(props) {
  const name = useSelector((state) => state.creditcard.name);
  const cvc = useSelector((state) => state.creditcard.cvc);
  const expiry = useSelector((state) => state.creditcard.expiry);
  const number = useSelector((state) => state.creditcard.number);
  const focus = useSelector((state) => state.creditcard.focus);
  const [issuer, setIssuer] = useState("");

  const size = useWindowSize();

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };
  return (
    <Container>
      <RedPanel>
        <Return>
          {size.width > 361 ? (
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                marginTop: 53,
                justifyContent: "flex-start",
                width: "100%",
                alignItems: "center",
                marginLeft: 80,
              }}
            >
              <ChevronLeftIcon
                style={{ alignItems: "flex-start", color: "#fff" }}
              />

              <InfoText>Alterar forma de pagamento</InfoText>
            </div>
          ) : (
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                flex: 1,

                width: "100%",
                alignItems: "center",
              }}
            >
              <ChevronLeftIcon
                style={{
                  alignItems: "flex-start",
                  color: "#fff",
                  width: 50,
                  height: 44,
                }}
              />
              <InfoText1>
                <strong>Etapa 2</strong> de 3
              </InfoText1>
            </div>
          )}
        </Return>
        <Message>
          <IconImg src={logo} />
          <Title>Adicione um novo cartão de crédito</Title>
        </Message>
      </RedPanel>

      <CreditCard className="App-payment">
        <Card
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
          callback={handleCallback}
        />
      </CreditCard>

      <WhitePanel>
        <BreadcrumbsContainer>
          <BreadCrumbs />
        </BreadcrumbsContainer>
        <FormContainer>
          <Form>
            <InputContainer className="form-group">
              <PaymentInputs field="number" />
            </InputContainer>
            <InputContainer>
              <PaymentInputs field="name" />
            </InputContainer>
            <SemiInputContainer>
              <PaymentInputs field="expiry" />
              <PaymentInputs field="cvc" />
            </SemiInputContainer>
            <input type="hidden" name="issuer" value={issuer} />
            <InputContainer>
              <PaymentInputs field="split" />
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
                  color: "#fff",
                }}
                size="small"
                variant="contained"
                value="Submit"
              >
                CONTINUAR
              </Button>
            </SubmitContainer>
          </Form>
        </FormContainer>
      </WhitePanel>
    </Container>
  );
}

export default CheckoutScreen;
