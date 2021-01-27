import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //config script onesignal
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;

  useEffect(() => {
    OneSignal.push(() => {
      OneSignal.init(
        {
          appId: "752ff749-d5de-48be-b426-b198ee3640b2",
          promptOptions: {
            slidedown: {
              enabled: true,
              actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
              acceptButtonText: "Accept!",
              cancelButtonText: "Cancel",
            }
          },
          welcomeNotification: {
            "title": "HELLO USERS",
            "message": "Thanks for subscribing!",
          }
        },
        //Automatically subscribe to the new_app_version tag
        OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
          // Callback called when tag has finished sending
          console.log('new_app_version TAG SENT', tagsSent);
        })
      );
    });
  },[OneSignal])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React App testing with OneSignal.
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
