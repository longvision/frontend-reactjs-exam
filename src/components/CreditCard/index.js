import React from "react";

// import { Container } from './styles';
import Cards from "react-credit-cards";
import "react-credit-cards/lib/styles.scss";

function CreditCard({ cvc, expiry, focus, name, number }) {
  return (
    <>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
      />
    </>
  );
}

export default CreditCard;
