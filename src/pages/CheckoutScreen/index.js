import React, { useState, useEffect } from "react";
import "react-credit-cards/lib/styles.scss";
import Card from "react-credit-cards";
import { TextField, Button } from "@material-ui/core";
import { NativeSelect } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import logo from "../../assets/novo-cartao.svg";
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
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  useWindowSize,
} from "../../utils";

function CheckoutScreen(props) {
  const [cvc, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
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
              <TextField
                style={{
                  width: "99%",
                  fontSize: 22,
                }}
                size="medium"
                placeholder="Número do cartão"
                type="tel"
                required
                pattern="[\d| ]{16,22}"
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
                    alignItems: "flex-start",
                  }}
                  size="medium"
                  placeholder="Validade"
                  type="tel"
                  className="form-control"
                  fullWidth={true}
                  pattern="\d\d/\d\d"
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
                  style={{
                    width: "99%",
                    fontSize: 22,
                    alignItems: "flex-start",
                  }}
                  size="medium"
                  placeholder="CVV"
                  type="tel"
                  fullWidth={true}
                  required
                  name="cvc"
                  onChange={(e) => setCVC(formatCVC(e.target.value))}
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
