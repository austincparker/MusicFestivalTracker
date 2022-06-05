import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./App.css";
import SignInView from "./views/SignInView";
import Navbar from "./components/Navbar";
import Routing from "./routes";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          firebaseKey: authed.uid
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <Routing firebaseKey={user.firebaseKey} />
        </>
      ) : (
        <SignInView user={user} />
      )}
    </div>
  );
}

export default App;
