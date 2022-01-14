import React from "react";
import Header from "./components/Header";
import styles from "./styles/app.module.css";

const App = () => {
  return (
    <><div className={styles.background}>
      <Header/>
    </div>
    <div>
      <h1 className={styles.mobile}>Questa pagina è accessibile solo da desktop 🙄</h1>
    </div>
    </>
  );
}

export default App;