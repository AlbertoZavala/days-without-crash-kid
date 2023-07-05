import React from 'react';
import {useEffect, useState } from 'react';
import moment from 'moment-timezone';
import 'moment-timezone';
import './App.css';

function App() {    
    const [leftTime, setLeftTime] = useState('');   
    const lastCrash = moment('2023-06-01');    

    useEffect(() => {

        const today = moment();

        const intervalo = setInterval(() => {
            setLeftTime(today.diff(lastCrash, 'days'), ' dias de diferencia');
        }, 1000);
        
        return () => {
            clearInterval(intervalo);
        }
    },[leftTime]);

  return (
    <div className="App">
      <header className="App-header">        
        <div>
            <p> Chocometro</p>        
        </div>
        <div>
            <p> {leftTime} días sin chocar </p>
        </div>
        <div>
            <p> ¡Bien hecho muchacho! </p>
        </div>

      </header>
    </div>
  );
}

export default App;
