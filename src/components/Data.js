import React, {useEffect, useState} from "react";
import styles from "../styles/data.module.css";

const Data = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
          clearInterval(interval);
        };
      }, []);

    

    return (
        <div className={styles.data}>
            <h2>
                {time.getDay()} {time.toLocaleString('default', { month: 'long' }).charAt(0).toLocaleUpperCase()+time.toLocaleString('default', { month: 'long' }).substr(1)} {time.getFullYear()}
            </h2>
        </div>
    );
}

export default Data;