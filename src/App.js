import React from "react";
import Header from "./components/Header";
import styles from "./styles/app.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import ToggleBtn from "./components/ToggleBtn";
import Teleprompt from "./components/Teleprompt";
import Viewer from "./components/Viewer";
import Tallys from "./components/Tallys";

const App = () => {
  return (
    <><div className={styles.background}>
      <Header/>
      <div className={`pt-4 ${styles.container}`}>
        <div className="row">
          <div className="col-6">
            <Teleprompt/>
          </div>
            <div className="col-6">
            <div className="row">
              <div className={styles.stateBtns}>
                <ToggleBtn name="ON AIR" value="0:00:00"/>
                <ToggleBtn name="REC" />
              </div>
            </div>
            <div className="row pt-4">
              <Viewer title="Nome della trasmissione"/>
            </div>
            <div className="row pt-4">
              <Tallys/>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    <div>
      <h1 className={styles.mobile}>Questa pagina è accessibile solo da desktop 🙄</h1>
    </div>
    </>
  );
}

export default App;