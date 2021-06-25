import React from "react";
import styles from "./styles/ListOfUsers.module.css";

const ListOfUsers = ({ ListOfUsers }) => {
  return (
    <div className={styles.usersFeed}>
      <i class="fas fa-users" style={{ color: "#1eff00be" }}>
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
