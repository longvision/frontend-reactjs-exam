import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePaymentInputs } from "react-payment-inputs";
import { NativeSelect } from "@material-ui/core";

import * as CreditcardActions from "../../store/modules/creditcard/actions";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../../utils";

export default function PaymentInputs({ field }) {
  const number = useSelector((state) => state.creditcard.number);
  const name = useSelector((state) => state.creditcard.name);
  const expiry = useSelector((state) => state.creditcard.expiry);
  const cvc = useSelector((state) => state.creditcard.cvc);

  const [customError, setCustomError] = useState({ name: "", split: "" });

  const ERROR_MESSAGES = {
    emptyCardNumber: "Preencha com o número do cartão",
    invalidCardNumber: "Número inválido",
    emptyExpiryDate: "Data inválida",
    monthOutOfRange: "Data inválido",
    yearOutOfRange: "Data inválido",
    dateOutOfRange: "Data inválida",
    invalidExpiryDate: "Data inválida",
    emptyCVC: "Código inválido",
    invalidCVC: "Código inválido",
    invalidName: "Insira o seu nome completo",
  };
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs({ errorMessages: ERROR_MESSAGES });

  const dispatch = useDispatch();

  const checkCompleteName = () => {
    name.indexOf(" ") === -1
      ? setCustomError({
          ...customError,
          name: "Insira o seu nome completo",
        })
      : setCustomError({
          ...customError,
          name: "",
        });
  };

  return (
    <div style={{ height: 44 }}>
      <div>
        {field === "name" && (
          <input
            style={{
              width: "99%",
              fontSize: 20,
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
              borderBottomWidth: 2,
              outline: "none",
            }}
            size="medium"
            placeholder="Nome (Igual ao do cartão)"
            type="input"
            required
            value={name}
            name="name"
            onChange={(e) => {
              checkCompleteName();

              dispatch(CreditcardActions.setName(e.target.value));
            }}
            onBlur={(e) => {
              checkCompleteName();
            }}
            onFocus={(e) => dispatch(CreditcardActions.setFocus(e.target.name))}
          />
        )}
        {field === "number" && (
          <input
            style={{
              width: "99%",
              fontSize: 20,
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
              borderBottomWidth: 2,
              outline: "none",
            }}
            required
            value={number}
            {...getCardNumberProps({
              placeholder: "Número do cartão",
              onChange: (e) =>
                dispatch(
                  CreditcardActions.setNumber(
                    formatCreditCardNumber(e.target.value)
                  )
                ),
            })}
            onFocus={(e) => dispatch(CreditcardActions.setFocus(e.target.name))}
          />
        )}
        {field === "expiry" && (
          <div style={{ width: "100%" }}>
            <input
              style={{
                width: "99%",
                fontSize: 20,
                alignItems: "flex-start",
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottomWidth: 2,
                outline: "none",
              }}
              value={expiry}
              name="expiry"
              {...getExpiryDateProps({
                placeholder: "Validade",
                onChange: (e) => {
                  dispatch(
                    CreditcardActions.setExpiry(
                      formatExpirationDate(e.target.value)
                    )
                  );
                },
              })}
              onFocus={(e) =>
                dispatch(CreditcardActions.setFocus(e.target.name))
              }
            />
          </div>
        )}
        {field === "cvc" && (
          <div style={{ width: "100%" }}>
            <input
              style={{
                width: "99%",
                fontSize: 20,
                alignItems: "center",
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottomWidth: 2,
                outline: "none",
              }}
              type="tel"
              value={cvc}
              required
              name="cvc"
              placeholder="CVV"
              {...getCVCProps({
                placeholder: "CVV",
                onChange: (e) =>
                  dispatch(CreditcardActions.setCVC(formatCVC(e.target.value))),
              })}
              onFocus={(e) =>
                dispatch(CreditcardActions.setFocus(e.target.name))
              }
            />
          </div>
        )}
        {field === "split" && (
          <>
            <NativeSelect
              id="select"
              style={{
                width: "99%",
                fontSize: 20,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottomWidth: 2,

                outline: "none",
              }}
              name="split"
              type="input"
              placeholder="Número de parcelas"
              onChange={(e) => {
                !e.target.value
                  ? setCustomError({
                      ...customError,
                      split: "Insira o número de parcelas",
                    })
                  : setCustomError({
                      ...customError,
                      split: "",
                    });
              }}
              onFocus={(e) =>
                dispatch(CreditcardActions.setFocus(e.target.name))
              }
            >
              <option value="">Número de parcelas</option>
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
          </>
        )}
      </div>

      {meta.isTouched && meta.error && (
        <span style={{ fontSize: 13, color: "red" }}>{meta.error}</span>
      )}
      {customError.name && (
        <span style={{ fontSize: 13, color: "red" }}>{customError.name}</span>
      )}
      {customError.split && (
        <span style={{ fontSize: 13, color: "red" }}>{customError.split}</span>
      )}
    </div>
  );
}
