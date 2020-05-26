import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { usePaymentInputs } from "react-payment-inputs";
import { NativeSelect } from "@material-ui/core";

import * as CreditcardActions from "../../store/modules/creditcard/actions";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  useWindowSize,
} from "../../utils";

export default function PaymentInputs({ field }) {
  const number = useSelector((state) => state.creditcard.number);
  const expiry = useSelector((state) => state.creditcard.expiry);
  const cvc = useSelector((state) => state.creditcard.cvc);

  const ERROR_MESSAGES = {
    emptyCardNumber: "Preencha com o número do seu cartão",
    invalidCardNumber: "Número inválido",
    emptyExpiryDate: "Data inválida",
    monthOutOfRange: "Data inválido",
    yearOutOfRange: "Data inválido",
    dateOutOfRange: "Data inválida",
    invalidExpiryDate: "Data inválida",
    emptyCVC: "Código inválido",
    invalidCVC: "Código inválido",
  };
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs({ errorMessages: ERROR_MESSAGES });

  const dispatch = useDispatch();

  return (
    <div>
      {field === "name" && (
        <input
          style={{
            width: "99%",
            fontSize: 22,
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            outline: "none",
          }}
          size="medium"
          placeholder="Nome (Igual ao do cartão)"
          type="input"
          required
          name="name"
          onChange={(e) => dispatch(CreditcardActions.setName(e.target.value))}
          onFocus={(e) => dispatch(CreditcardActions.setFocus(e.target.name))}
        />
      )}
      {field === "number" && (
        <input
          style={{
            width: "99%",
            fontSize: 22,
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            outline: "none",
          }}
          size="medium"
          placeholder="Número do cartão"
          type="tel"
          required
          value={number}
          name="number"
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
              fontSize: 22,
              alignItems: "flex-start",
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
              outline: "none",
            }}
            size="medium"
            type="tel"
            className="form-control"
            fullWidth={true}
            value={expiry}
            name="expiry"
            required
            {...getExpiryDateProps({
              placeholder: "Validade",
              onChange: (e) =>
                dispatch(
                  CreditcardActions.setExpiry(
                    formatExpirationDate(e.target.value)
                  )
                ),
            })}
            onFocus={(e) => dispatch(CreditcardActions.setFocus(e.target.name))}
          />
        </div>
      )}
      {field === "cvc" && (
        <div style={{ width: "100%" }}>
          <input
            style={{
              width: "99%",
              fontSize: 20,
              alignItems: "flex-start",
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
              outline: "none",
            }}
            placeholder="CVV"
            type="tel"
            fullWidth={true}
            value={cvc}
            required
            name="cvc"
            {...getCVCProps({
              placeholder: "CVV",

              onChange: (e) =>
                dispatch(CreditcardActions.setCVC(formatCVC(e.target.value))),
            })}
            onFocus={(e) => dispatch(CreditcardActions.setFocus(e.target.name))}
          />
        </div>
      )}
      {field === "split" && (
        <NativeSelect
          style={{
            width: "99%",
            fontSize: 22,
            borderTop: 0,
            borderLeft: 0,
            borderRight: 0,
            outline: "none",
            outline: "none",
          }}
          name="split"
          placeholder="Número do parcelas"
          type="input"
          onFocus={(e) => dispatch(CreditcardActions.setFocus(e.target.name))}
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
      )}
      <>
        {meta.isTouched && meta.error && (
          <span style={{ fontSize: 13, color: "red" }}>{meta.error}</span>
        )}
      </>
    </div>
  );
}
