import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_LOGIN_NAME } from "../helpers/actions/action_types";
import styles from "./styles/Login.module.css";

const Login = () => {
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();

  const loigInHandler = (e) => {
    e.preventDefault();
    let username = document.getElementById("username_input").value;

    if (username.trim().length === 0) {
      setIsValid(false);
      return;
    }

    dispatch({
      type: SET_LOGIN_NAME,
      payload: username,
    });

    document.getElementById("username_input").value = "";
  };

  return (
    <form className={styles.form}>
      <h4 className={styles.welcomeMessage}>Welcome to chat</h4>
      <input
        className={`${styles["input"]} ? ${!isValid && styles.input_invalid}`}
        type="text"
        name="name"
        id="username_input"
        placeholder="Enter username:"
      />
      <button className={styles.button} type="submit" onClick={loigInHandler}>
        <i class="fas fa-sign-in-alt"></i>
      </button>
    </form>
  );
};

export default Login;
