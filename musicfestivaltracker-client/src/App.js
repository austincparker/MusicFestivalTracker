// @ts-nocheck
import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import Routing from "./routes";
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
          firebaseKey: authed.firebaseKey
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, [user]);
  return (
    <div>
      {user ? (
        <>
          <Navbar />
          <Routing uid={user.id} />
        </>
      ) : (
        <SignInView user={user} />
      )}
    </div>
  );
}

export default App;
