import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { verifyLogInData, LoginData } from "../../services/loginReg.service";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inValidEmail, setInvalidEmail] = useState(false);
  const [inValidPassword, setInvalidPassword] = useState(false);

  const validateInput = (): void => {
    if (email.length === 0 || !email.includes("@")) setInvalidEmail(true);
    password.length === 0 && setInvalidPassword(true);
    if (email.length > 0 && password.length > 0) {
      verifyLogInData(loginData);
    }
  };

  const loginData: LoginData = {
    email: email,
    password: password,
  };

  return (
    <div className={styles.box}>
      <h1>Login</h1>
      <input
        className={styles.text}
        type="text"
        placeholder="Email"
        onInput={(event) => {
          setEmail(event.currentTarget.value);
        }}
      />
      {inValidEmail ? <p>Please enter an email address</p> : null}
      <input
        className={styles.text}
        type="password"
        placeholder="Password"
        onInput={(event) => {
          setPassword(event.currentTarget.value);
        }}
      />
      {inValidPassword ? <p>Please enter a valid password</p> : null}
      <button
        className={styles.submit}
        onClick={() => {
          validateInput();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
