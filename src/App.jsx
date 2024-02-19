// App.jsx
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { firebaseConfig } from '../firebase-config';

const app = initializeApp(firebaseConfig);

function App() {
  const db = getDatabase(app);

  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(db, "ledStatus");

    onValue(dataRef, (snapshot) => {
      const newData = snapshot.val();
      setData(newData);
    });
  }, [db]);

  const ledStatusRef = ref(db, "ledStatus");

  const handleSetLedStatusOn = () => {
    const newLedStatus = 1;
    set(ledStatusRef, newLedStatus);
  };

  const handleSetLedStatusOff = () => {
    const newLedStatus = 0;
    set(ledStatusRef, newLedStatus);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={handleSetLedStatusOn}>On</button>
        <button onClick={handleSetLedStatusOff}>Off</button>
        <p>Led Status: {data ? "On" : "Off"}</p>
      </div>
    </>
  );
}

export default App;
