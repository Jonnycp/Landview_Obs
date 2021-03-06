import React from 'react';
import styles from "../styles/toggleBtn.module.css";
import tallyS from "../styles/tally.module.css";

function ToggleBtn({name, value, active, preview, tally}){
    return <>
    {
        !tally ?
        <div className={`${active || value ? styles.toggleBtn + " " + styles.active : styles.toggleBtn}`}>
            <h4>{name}</h4>
            <h5>{value}</h5>
        </div>
        : 
        <div className={`${active ? styles.toggleBtn + " " + styles.tally + " " + tallyS.active : preview ? styles.toggleBtn  + " " + styles.tally + " " + tallyS.preview : styles.toggleBtn + " " + styles.tally}`}>
            <h4>{name}</h4>
            <h5>{value}</h5>
        </div>

    }</>
}

export default ToggleBtn;