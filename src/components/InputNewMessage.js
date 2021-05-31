import React, { useState } from "react";
import styles from "./styles/Input.module.css";

const InputNewMessage = ({ dispatch, userName }) => {
  const [inputIsValid, setinputIsValid] = useState(true);

  const addMessage = () => {
    let messageInput = document.getElementById("input").value;

    if (messageInput.trim().length === 0) {
      setinputIsValid(false);
      return;
    }
    document.getElementById("input").value = "";

    const currentTime = new Date().toTimeString().slice(0, 5);

    dispatch({
      type: "ADDING_MESSAGE",
      payload: { name: userName, time: currentTime, text: messageInput },
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
      <button type="button" onClick={addMessage} className={styles.button}>
        <i class="far fa-paper-plane"></i>
        {/* Send */}
      </button>
    </div>
  );
};

export default InputNewMessage;
