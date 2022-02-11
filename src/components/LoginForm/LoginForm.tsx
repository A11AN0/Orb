import React, { useState } from "react";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inValidEmail, setInvalidEmail] = useState(false);
  const [inValidPassword, setInvalidPassword] = useState(false);

  const validateInput = (): void => {
    email.length === 0 && setInvalidEmail(true);
    password.length === 0 && setInvalidPassword(true);
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
      {inValidPassword ? <p>Please enter a valid password </p> : null}
      <button
        className={styles.submit}
        onClick={() => {
          validateInput();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
