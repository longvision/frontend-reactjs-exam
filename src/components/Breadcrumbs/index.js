import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import check from "../../assets/check.svg";

function Breadcrumbs() {
  return (
    <div
      style={{
        marginTop: 10,
        marginLeft: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          alignItems: "center",
          borderRadius: 100,
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 22,
          height: 22,
          backgroundColor: "red",
          display: "flex",
          marginRight: 8,
        }}
      >
        <img
          src={check}
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 1,
          }}
        />
      </div>
      <div>
        <a style={{ fontSize: 13, color: "red" }}> Carrinho </a>
      </div>
      <div>
        <ChevronRightIcon
          style={{ color: "red", marginLeft: 24, marginRight: 24 }}
        />
      </div>
      <div
        style={{
          alignItems: "center",
          borderRadius: 100,
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 22,
          height: 22,
          backgroundColor: "red",

          marginRight: 8,
          display: "flex",
        }}
      >
        <div
          style={{
            alignItems: "center",
            borderRadius: 100,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 20,
            height: 20,
            backgroundColor: "white",

            display: "flex",
          }}
        >
          <p style={{ color: "red", fontSize: 15 }}>2</p>
        </div>
      </div>
      <div>
        <a style={{ fontSize: 13, color: "red" }}>Confirmação</a>
      </div>
      <div>
        <ChevronRightIcon
          style={{ color: "red", marginLeft: 24, marginRight: 24 }}
        />
      </div>
      <div
        style={{
          alignItems: "center",
          borderRadius: 100,
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 22,
          height: 22,
          backgroundColor: "red",
          marginRight: 8,
          display: "flex",
        }}
      >
        <div
          style={{
            alignItems: "center",
            borderRadius: 100,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 20,
            height: 20,
            backgroundColor: "white",

            display: "flex",
          }}
        >
          <p style={{ color: "red", fontSize: 15 }}>3</p>
        </div>
      </div>
      <div>
        <a style={{ fontSize: 13, color: "red" }}>Confirmação</a>
      </div>
    </div>
  );
}

export default Breadcrumbs;
