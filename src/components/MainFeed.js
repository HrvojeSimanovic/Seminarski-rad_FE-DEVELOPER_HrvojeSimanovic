import React from "react";

import styles from "./styles/MainFeed.module.css";

const MainFeed = ({ listOfMessages, userName }) => {
  return (
    <div className={styles.feed}>
      {listOfMessages.map((message, index) => {
        if (message.name === userName) {
          return (
            <div key={index} className={styles.feedMessage_My}>
              <div className={styles.feedMessage_name_My}>{message.name}</div>
              <div className={styles.feedMessage_text_My}>
                {message.text}
                <div className={styles.feedMessage_time_My}>{message.time}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className={styles.feedMessage}>
              <div className={styles.feedMessage_name}>{message.name}</div>
              <div className={styles.feedMessage_text}>
                {message.text}
                <div className={styles.feedMessage_time}>{message.time}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MainFeed;
