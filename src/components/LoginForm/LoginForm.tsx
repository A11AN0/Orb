import React from "react";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <form className={styles.box} action="">
      <h1>Login</h1>
      <input className={styles.text} type="text" placeholder="Email" />
      <p>Please enter an email address</p>
      <input className={styles.text} type="text" placeholder="Password" />
      <p>Please enter a valid password </p>
      <input className={styles.submit} type="submit" name="" id="" />
    </form>
  );
};

export default LoginForm;
