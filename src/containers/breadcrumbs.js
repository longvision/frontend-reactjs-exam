import React from "react";

// import { Container } from './styles';

function Breadcrumbs() {
  return (
    <div style={{ marginTop: 50 }}>
      <ul
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div style={{ backgroundColor: "red" }}>
          <img style={{ backgroundColor: "red" }} />
          <a> Numero </a>
        </div>
        <div>
          <a> Carrinho </a>
        </div>
        <div style={{ backgroundColor: "red" }}>
          <a> Icone </a>
        </div>
        <div>
          <img />
          <a> Carrinho</a>
        </div>
        <div style={{ backgroundColor: "red" }}>
          <a>Carrinho</a>
        </div>
        <div>
          <a>Carrinho</a>
        </div>
        <div style={{ backgroundColor: "red" }}>
          <a>Carrinho</a>
        </div>
      </ul>
    </div>
  );
}

export default Breadcrumbs;
