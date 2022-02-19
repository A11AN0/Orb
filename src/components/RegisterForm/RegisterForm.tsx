import { deliverLogInData, LoginData } from "../../services/loginReg.service";
import React, { useState } from "react";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inValidEmail, setInvalidEmail] = useState(false);
  const [inValidPassword, setInvalidPassword] = useState(false);

  const loginData: LoginData = {
    email: email,
    password: password,
  };

  const validateInput = (): void => {
    email.length === 0 && setInvalidEmail(true);
    password.length === 0 && setInvalidPassword(true);
    if (email.length > 0 && password.length > 0) {
      deliverLogInData(loginData);
    }
  };

  return (
    <div className={styles.box}>
      <h1>Register</h1>
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
      {inValidPassword ? <p>Please enter a valid password </p> : null}
      <button
        className={styles.submit}
        onClick={() => {
          validateInput();
        }}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
