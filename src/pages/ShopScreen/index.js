import React from "react";

// import {
//   Container,
//   Form,
//   Title,
//   IconImg,
//   RedPanel,
// } from "../CheckoutScreen/styles";
import NavBar from "../../components/NavBar";
import CheckoutScreen from "../CheckoutScreen/index";

function ShopScreen() {
  return (
    <div style={{ width: 1920, height: 1080, backgroundColor: "#F7F7F7" }}>
      <NavBar />
      <div
        style={{
          flexDirection: "column",
          display: "flex",
        }}
      >
        <CheckoutScreen />
      </div>
    </div>
  );
}

export default ShopScreen;
