import React from 'react';
import styles from "../styles/viewer.module.css";


function Viewer({title}){
    return <div className={styles.viewer}>
        <h2>{title}</h2>
        <iframe src={`https://player.twitch.tv/?channel=radiopanettibari&muted=true&parent=${window.location.hostname}`} frameBorder="0" allowFullScreen scrolling="no" height="348" width="620" title={title}></iframe>
    </div>
}

export default Viewer;