import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./main"
import Login from "./Login/src/login"

/**
 * Redux Modules
 */

import {Provider} from "react-redux"
import { createStore } from "redux";
import {RootReducer, middleware} from "./Login/src/login/store";

//Styles importation
import "./styles.css";

const Store = createStore(RootReducer, middleware);

console.log(Store.getState());

function App() {
  return (  
    <div>
      {/**router to Login */}
      <Route path="/member" component={Login} />

      <Route exact path="/" component={Main} />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  
    <Router>
      <Provider store={Store}>
        <App />
      </Provider>
    </Router>, 
  rootElement);