import React from "react";
import LogoBrand from "../assets/logo-rp.png";
import blob from "../assets/blob.svg";
import styles from "../styles/logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logo} style={{ backgroundImage: `url(${blob})` }}>
      <img src={LogoBrand} alt="Logo radioPanetti"/>
    </div>
  );
};

export default Logo;
