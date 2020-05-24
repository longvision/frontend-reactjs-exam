import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";

import { TextField, Button } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
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

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "../../utils";

function CheckoutScreen() {
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
          <Arrow />
          <InfoText>Alterar forma de pagamento</InfoText>
        </Return>
        <Message>
          <IconImg />
          <Title>Adicione um novo cartão de crédito</Title>
        </Message>
      </RedPanel>
      <Card id="PaymentForm">
        <CreditCard
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
          callback={() => handleCallback()}
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
                name="name"
                placeholder="Nome (Igual ao cartão)"
                type="input"
                required
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </InputContainer>
            <SemiInputContainer>
              <div style={{ width: "48%" }}>
                <TextField
                  style={{ alignItems: "flex-start" }}
                  fullWidth={true}
                  placeholder="Validade"
                  pattern="\d\d/\d\d"
                  type="input"
                  required
                  name="expiry"
                  onChange={(e) =>
                    setExpiry(formatExpirationDate(e.target.value))
                  }
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </div>
              <div style={{ width: "48%" }}>
                <TextField
                  fullWidth={true}
                  style={{ alignItems: "flex-end" }}
                  type="tel"
                  placeholder="CVV"
                  className="form-control"
                  pattern="\d{3,4}"
                  name="cvc"
                  required
                  onChange={(e) => setCVC(formatCVC(e.target.value))}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </div>
            </SemiInputContainer>

            <InputContainer>
              <NativeSelect
                style={{
                  width: "99%",
                  fontSize: 22,
                }}
                name="number"
                placeholder="Número do parcelas"
                type="input"
                standard
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
          </form>
        </div>
      </WhitePanel>
    </Container>
  );
}

export default CheckoutScreen;
