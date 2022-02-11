import React, { useState } from "react";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <p>Please enter an email address</p>
      <input
        className={styles.text}
        type="password"
        placeholder="Password"
        onInput={(event) => {
          setPassword(event.currentTarget.value);
        }}
      />
      <p>Please enter a valid password </p>
      <button className={styles.submit}>Submit</button>
    </div>
  );
};

export default LoginForm;
