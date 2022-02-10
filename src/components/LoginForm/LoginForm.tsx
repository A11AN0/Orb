import React from "react";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <form className={styles.content} action="">
      <h2>Login</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="Email">Email</label>
        <input name="Email" type="text" placeholder="Enter Email" />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="Password">Passwords</label>
        <input name="Password" type="text" placeholder="Enter password" />
      </div>
    </form>
  );
};

export default LoginForm;
