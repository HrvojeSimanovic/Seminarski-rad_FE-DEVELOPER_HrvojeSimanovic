import React from "react";
import { useSelector } from "react-redux";

import styles from "./styles/Header.module.css";

const Header = () => {
  const currentRoom = useSelector((state) => state.generalRoom.currentRoom);

  return <div className={styles.header}>You are in "{currentRoom}" room</div>;
};

export default Header;
