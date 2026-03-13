import { useState } from "react";
import Form from "../components/form";

const Login = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: " #F27F34",
      }}
    >
      <Form />
    </div>
  );
};

export default Login;
