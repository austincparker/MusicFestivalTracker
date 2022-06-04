import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import  createUser  from "../userData";
const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const {
        additionalUserInfo: { isNewUser },
      } = result;
      if (isNewUser) {
        firebase.auth().onAuthStateChanged((authed) => {
          createUser({
            fullName: authed.displayName,
            firebaseKey: authed.uid
          });
        });
      }
    });
};
const signOutUser = () =>
  new Promise((resolve, reject) => {
    firebase.auth().signOut().then(resolve).catch(reject);
  });
export { signInUser, signOutUser };
