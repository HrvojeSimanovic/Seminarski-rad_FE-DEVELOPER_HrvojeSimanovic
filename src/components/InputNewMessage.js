import React, { useState } from "react";
import styles from "./styles/Input.module.css";

const InputNewMessage = ({ dispatch }) => {
  const [inputIsValid, setinputIsValid] = useState(true);

  const addNewMessage = () => {
    let messageInput = document.getElementById("input").value;

    if (messageInput.trim().length === 0) {
      setinputIsValid(false);
      return;
    }
    document.getElementById("input").value = "";

    const currentTime = new Date().toTimeString().slice(0, 5);

    dispatch({
      type: "PUBLISH",
      payload: { text: messageInput, time: currentTime },
    });
  };

  return (
    <div className={styles.inputFeed}>
      <input
        className={`${styles.input} ${!inputIsValid && styles.input_invalid}`}
        type="text"
        name="input"
        id="input"
      />
      <button type="button" onClick={addNewMessage} className={styles.button}>
        <i className="far fa-paper-plane"></i>
      </button>
    </div>
  );
};

export default InputNewMessage;
