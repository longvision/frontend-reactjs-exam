import React, { useState, useRef } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Card from "react-credit-cards";
import { TextField, Button } from "@material-ui/core";
import { NativeSelect, Grid } from "@material-ui/core";

import Input from "../../components/Input";

import {
  Container,
  WhitePanel,
  Title,
  IconImg,
  Arrow,
  RedPanel,
  Return,
  Return1,
  InfoText,
  SubmitContainer,
  SemiInputContainer1,
  SemiInputContainer,
  FormContainer,
  SensibleInputContainer,
  Form,
  BreadcrumbsContainer,
  Message,
  Label,
  Label1,
  Label2,
  SemiInput,
  CreditCard,
  InputContainer,
} from "./styles";
import BreadCrumbs from "../../containers/breadcrumbs";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "../../utils";

function CheckoutScreen(props) {
  const [cvc, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [issuer, setIssuer] = useState("");

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };
  return (
    <Container>
      <RedPanel>
        <Return>
          {window.innerWidth > 359 ? (
            <>
              <Arrow />
              <InfoText>Alterar forma de pagamento</InfoText>
            </>
          ) : (
            <InfoText>
              <strong>Etapa 2</strong> de 3
            </InfoText>
          )}
        </Return>
        <Message>
          <IconImg />
          <Title>Adicione um novo cartão de crédito</Title>
        </Message>
      </RedPanel>

      <CreditCard id="PaymentForm">
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
        <FormContainer key="Payment">
          <Form>
            <InputContainer>
              <TextField
                style={{
                  width: "99%",
                  fontSize: 22,
                }}
                size="medium"
                placeholder="Número do cartão"
                type="tel"
                required
                name="number"
                onChange={(e) =>
                  setNumber(formatCreditCardNumber(e.target.value))
                }
                onFocus={(e) => setFocus(e.target.name)}
              />
            </InputContainer>
            <InputContainer>
              <TextField
                style={{
                  width: "99%",
                  fontSize: 22,
                }}
                size="medium"
                placeholder="Nome (Igual ao do cartão)"
                type="input"
                required
                name="name"
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </InputContainer>
            <SemiInputContainer>
              <div style={{ width: "48%" }}>
                <TextField
                  style={{
                    width: "99%",
                    fontSize: 22,
                  }}
                  size="medium"
                  style={{ alignItems: "flex-start" }}
                  placeholder="Validade"
                  type="input"
                  fullWidth={true}
                  required
                  name="name"
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </div>
              <div style={{ width: "48%" }}>
                <TextField
                  style={{
                    width: "99%",
                    fontSize: 22,
                  }}
                  size="medium"
                  style={{ alignItems: "flex-start" }}
                  placeholder="CVV"
                  type="tel"
                  fullWidth={true}
                  required
                  name="cvc"
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </div>
            </SemiInputContainer>
            <input type="hidden" name="issuer" value={issuer} />
            <InputContainer>
              <NativeSelect
                style={{
                  width: "99%",
                  fontSize: 22,
                }}
                name="number"
                placeholder="Número do parcelas"
                type="input"
              >
                <option value="12">12x R$1.000,00 sem juros</option>
                <option value="11">11x R$ 990,00 sem juros</option>
                <option value="10">10x R$950,00 sem juros</option>
                <option value="9">9x R$1.000,00 sem juros</option>
                <option value="8">8x R$1.000,00 sem juros</option>
                <option value="7">7x R$1.000,00 sem juros</option>
                <option value="6">6x R$1.000,00 sem juros</option>
                <option value="5">5x R$1.000,00 sem juros</option>
                <option value="4">4x R$1.000,00 sem juros</option>
                <option value="3">3x R$1.000,00 sem juros</option>
                <option value="2">2x R$1.000,00 sem juros</option>
                <option value="1">1x R$1.000,00 sem juros</option>
              </NativeSelect>
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
          </Form>
        </FormContainer>
      </WhitePanel>
    </Container>
  );
}

export default CheckoutScreen;
