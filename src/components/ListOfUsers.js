import React from "react";
import { useSelector } from "react-redux";

import styles from "./styles/ListOfUsers.module.css";

const ListOfUsers = () => {
  const ListOfUsers = useSelector((state) => state.generalRoom.members);
  return (
    <div className={styles.usersFeed}>
      <i className="fas fa-users" style={{ color: "#1eff00be" }}>
        <span className={styles.usersFeedTitle}> Online</span>
      </i>
      <hr />
      <ul className={styles.usersList}>
        {ListOfUsers.map((user, index) => {
          return <li key={index}>{user.clientData.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListOfUsers;
