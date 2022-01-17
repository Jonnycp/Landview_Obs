import React, {useState} from "react";
import Header from "./components/Header";
import styles from "./styles/app.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import ToggleBtn from "./components/ToggleBtn";
import Teleprompt from "./components/Teleprompt";
import Viewer from "./components/Viewer";
import Tallys from "./components/Tallys";
import ObsWebSocket from "obs-websocket-js";

const App = () => {
  const obs = new ObsWebSocket();
  const [address, setAddress] = useState(prompt("Inserisci l'ip con la porta di obs", "localhost:4444"));

  obs.connect({ address: address, password: 'password' });

  const getRecordStats = async () => {
    return await obs.call('GetRecordStatus');
  }
  
  console.log(getRecordStats())
  
  //streaming.state ? streaming.value : null
  
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
                <ToggleBtn name="ON AIR" value={"0:00:00"}/>
                <ToggleBtn name="REC" value={"0:00:00"}/>
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