import React from 'react';
import logo from './logo.svg';
import './App.css';
import { generateAndSaveFirebaseToken, onMessageListener } from './firebase';

function App() {

    const fetchNewPushNotificationTokenAndRegister = (showNotification) => {
        let tokenGenerationResult = false;
        if (localStorage.getItem('fcm_token') === null) {
            tokenGenerationResult = generateAndSaveFirebaseToken();
        }
        onMessageListener().then(payload => {
            if (showNotification && payload){
                showNotification(payload);
            }
        }).catch(err => console.error('failed: ', err));
    }

    React.useEffect(() => {
        fetchNewPushNotificationTokenAndRegister();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
