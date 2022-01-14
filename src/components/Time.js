import React, {useEffect, useState} from "react";
import styles from "../styles/time.module.css";

const Time = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
          clearInterval(interval);
        };
      }, []);

    

    return (
        <div className={styles.time}>
            <h2>
                {('0'+time.getHours()).substr(-2)} : {('0'+time.getMinutes()).substr(-2)} : {('0'+time.getSeconds()).substr(-2)}
            </h2>
        </div>
    );
}

export default Time;