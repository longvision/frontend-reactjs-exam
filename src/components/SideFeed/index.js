import React from "react";

import { Container } from "./styles";
import img from "../../assets/side.png";

function SideFeed() {
  return (
    <img
      src={img}
      style={{ width: 327, height: 285, marginTop: 65, marginLeft: 15 }}
      alt=""
    />
  );
}

export default SideFeed;
