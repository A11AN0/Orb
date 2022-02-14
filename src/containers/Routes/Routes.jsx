import React from "react";
import { Router } from "@reach/router";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const Routes = () => {
  return (
    <Router>
      <LoginForm default />
      <RegisterForm path="register" />
    </Router>
  );
};

export default Routes;
