import React, { useReducer, useState } from "react";
import "./home.css";
import { Input, Button } from "./../../conponents";
import firebaes from "./../../config/firebase";
import { getAuth, createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider  } from "firebase/auth";
const Home = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState();
  const SignUp = () => {
    if (email === "") {
      setMessageType("error");
      setMessage("Email Required!");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    } else if (password === "") {
      setMessageType("error");
      setMessage("Password Requried");
    } else {
      const userData = {
        email: email,
        password: password,
      };
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setMessageType("sucess");
          setMessage("Sign Up....");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setMessageType("error");
          setMessage(errorMessage);
        });
    }
  };

  const SignInWithGoogle =()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }
  return (
    <div>
      <h1>Home Page</h1>
      <div className="form-container">
        <Input
          type="email"
          value={email}
          name="email"
          onChange={(email) => setEmail(email.target.value)}
          placeholder="Email Address"
        />
        <Input
          type="password"
          value={password}
          onChange={(password) => setPassword(password.target.value)}
          placeholder="Password"
        />
        <Button title="Sign Up" onClick={SignUp} />

        <p className={messageType === "error" ? "error" : "sucess"}>
          {message}
        </p>

        <Button title="Login in with Google" onClick={SignInWithGoogle} />
        
      </div>
    </div>
  );
};
export default Home;
