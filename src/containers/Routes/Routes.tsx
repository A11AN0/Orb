import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import LoginForm from "../../components/LoginForm";
import Home from "../Home";
import RegisterForm from "../../components/RegisterForm";

const LoginFormRoute = (props: RouteComponentProps) => <LoginForm />;
const RegisterFormRoute = (props: RouteComponentProps) => <RegisterForm />;
const HomeRoute = (props: RouteComponentProps) => <Home />;
const InitialPageRoute = (props: RouteComponentProps) => (
  <div>login or register</div>
);

const Routes = () => {
  return (
    <Router>
      <InitialPageRoute default />
      <LoginFormRoute path="login" />
      <RegisterFormRoute path="register" />
      <HomeRoute path="home" />
    </Router>
  );
};

export default Routes;
