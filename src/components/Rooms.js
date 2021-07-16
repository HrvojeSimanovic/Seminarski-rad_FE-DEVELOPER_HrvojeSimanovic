import React from "react";

import styles from "./styles/Rooms.module.css";

const Rooms = () => {
  return (
    <div className={styles.roomsFeed}>
      <span>Rooms</span>
      <hr />
      <ul className={styles.roomsList}>
        <li className={styles.roomItem}>general</li>
        <li className={styles.roomItem}>sport</li>
      </ul>
    </div>
  );
};

export default Rooms;
