import React, {Fragment} from 'react';
import Formulario from "./components/Formulario";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Fragment>
      <h1>Proyecto citas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario/>
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
