import React from "react";
import Time from "./Time";
import Data from "./Data";
import styles from "../styles/header.module.css";
import Logo from "./Logo";

const Header = () => {
    return ( 
        <div className={styles.header}>
            <Logo/>
            <Time/>
            <Data/>
        </div>
    );
}

export default Header;