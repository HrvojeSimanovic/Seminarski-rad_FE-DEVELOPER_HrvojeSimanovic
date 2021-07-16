import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles/MainFeed.module.css";

const MainFeed = () => {
  const messages = useSelector((state) => state.generalRoom.messages);
  const userName = useSelector((state) => state.loginName.loginName);

  return (
    <div className={styles.feed}>
      {messages.map((message, index) => {
        if (message.member.clientData.name === userName) {
          return (
            <div key={index} className={styles.feedMessage_My}>
              <div className={styles.feedMessage_name_My}>
                {message.member.clientData.name}
              </div>
              <div className={styles.feedMessage_text_My}>
                {message.data.text}
                <div className={styles.feedMessage_time_My}>
                  {message.data.time}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div key={index} className={styles.feedMessage}>
              <div className={styles.feedMessage_name}>
                {message.member.clientData.name}
              </div>
              <div className={styles.feedMessage_text}>
                {message.data.text}
                <div className={styles.feedMessage_time}>
                  {message.data.time}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MainFeed;
