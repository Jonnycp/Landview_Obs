import React from "react";
import styles from "../styles/tally.module.css"
import ToggleBtn from "./ToggleBtn";

const Tallys = () => {
    const scenes = [
        {
            id: 1,
            name: "CAM 1",
            desc: "Luca G",
            state: "active"
        },
        {
            id: 2,
            name: "CAM 2",
            desc: "Luca L",
            state: "preview"
        },
        {
            id: 3,
            name: "CAM 3",
            desc: "Manuel",
            state: ""
        },
        {
            id: 4,
            name: "STARTING",
            state: ""
        }
    ]
    return ( 
        <div className={styles.tally}>
            {
                scenes.map((item) => {
                    return <ToggleBtn key={item.id} tally name={item.name} value={item.desc} active={item.state === "active"} preview={item.state === "preview"}/>
                })
            }
        </div>
    );
}

export default Tallys;