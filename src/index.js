import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { BrowserRouter } from "react-router-dom";
import { Router, Route, browserHistory } from "react-router";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import { firebaseApp } from "./firebase";

console.log("Verser", process.env.REACT_APP_NAME);

//Enable followinf when using firebase.google.com

// firebaseApp.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log("user has signed in", user);
//   } else {
//     console.log("user needs to sign in");
//   }
// });

ReactDOM.render(
  // <Router path="/browserHistory" history={browserHistory}>
  // <Route path="/app" component={App}/>
  // <Route path="/LoginTest" component={LoginTest}/>
  // <Route path="/SignUp" component={SignUp}/>
  //</Router>

  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("App")
);

//Busineess Logic of the application can be written here.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
