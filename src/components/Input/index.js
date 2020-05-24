import React from "react";
import { TextField } from "@material-ui/core";

import InputMask from "react-input-mask";
// import { Container } from './styles';

const Input = ({ value, onChange, onFocus, placeholder, name, mask }) => (
  <InputMask
    mask={mask}
    onChange={onChange}
    onFocus={onFocus}
    name={name}
    placeholder={placeholder}
  >
    {(inputProps) => (
      <TextField
        style={{
          width: "100%",
          fontSize: 22,
        }}
        {...inputProps}
        type="input"
        required
      />
    )}
  </InputMask>
);

export default Input;
