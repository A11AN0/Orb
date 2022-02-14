import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const LoginFormRoute = (props: RouteComponentProps) => <LoginForm />;
const RegisterFormRoute = (props: RouteComponentProps) => <RegisterForm />;
const InitialPageRoute = (props: RouteComponentProps) => (
  <div>login or register</div>
);
const HomePageRoute = (props: RouteComponentProps) => <div>Homepage :)</div>;

const Routes = () => {
  return (
    <Router>
      <InitialPageRoute default />
      <LoginFormRoute path="login" />
      <RegisterFormRoute path="register" />
      <HomePageRoute path="home" />
    </Router>
  );
};

export default Routes;
