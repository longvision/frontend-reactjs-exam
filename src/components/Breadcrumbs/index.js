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
          borderRadius: 100,
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 20,
          height: 20,
          backgroundColor: "#de4b4b",
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
        <a style={{ fontSize: 13, color: "#de4b4b" }}> Carrinho </a>
      </div>
      <div>
        <ChevronRightIcon
          style={{ color: "#de4b4b", marginLeft: 23, marginRight: 23 }}
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
          width: 20,
          height: 20,
          backgroundColor: "#de4b4b",

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
            width: 18,
            height: 18,
            backgroundColor: "white",

            display: "flex",
          }}
        >
          <p style={{ color: "#de4b4b", fontSize: 15 }}>2</p>
        </div>
      </div>
      <div>
        <a style={{ fontSize: 13, color: "#de4b4b" }}>Confirmação</a>
      </div>
      <div>
        <ChevronRightIcon
          style={{ color: "#de4b4b", marginLeft: 23, marginRight: 23 }}
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
          width: 20,
          height: 20,
          backgroundColor: "#de4b4b",
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
            width: 18,
            height: 18,
            backgroundColor: "white",

            display: "flex",
          }}
        >
          <p style={{ color: "#de4b4b", fontSize: 15 }}>3</p>
        </div>
      </div>
      <div>
        <a style={{ fontSize: 13, color: "#de4b4b" }}>Confirmação</a>
      </div>
    </div>
  );
}

export default Breadcrumbs;
