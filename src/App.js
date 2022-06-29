import React,{useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";
import fire from './fire'
import Login from "./components/Login";
import MainPage from "./components/MainPage";

const App = () => {

  const[user, setUser] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[emailError, setEmailError] = useState("");
  const[passwordError, setPasswordError] = useState("");
  const[hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch(error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case "auth/wrong-password":
            setPasswordError(error.message);
            break;
          default:
        }
      });
  } 

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch(error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
            break;
          default: 
        }
      });
  }

  const handleLogout = ()=>{
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
    console.log(authListener);
  }, [])

  return (
    < >
      {user ? (
        <MainPage handleLogout={handleLogout} />
      ) : 
      (
        <Login 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}  
              handleLogin={handleLogin} 
              handleSignup={handleSignup} 
              hasAccount={hasAccount} 
              setHasAccount={setHasAccount} 
              emailError={emailError} 
              passwordError={passwordError} />
      )}
      
    </>
    
  );
};

export default App;
