import React from "react";
import ReactDOM from "react-dom";
import Flex from "./reFlexing";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import Website layout
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

//import website pages
import Home from "./Component/Home";
//import website pages/profes
import Patient from "./Component/Patient/Patients";
import AccueilLabo from "./Component/Patient/Acceuil";
import Urgences from "./Component/Patient/Urgences";
import AvantExamen from "./Component/Patient/AvantExamen";
import Documents from "./Component/Patient/Documents";
import Resultat from "./Component/Patient/Resultat";
//import website pages/profes
import Professional from "./Component/Professional/index";

/**
 * Website Modules
 */
import Contact from "./Component/Contact";
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
    <Flex style={{ padding: "0", margin: "0px" }}>
    
      <Header />
      {/**to do add router to home */}
      <Route exact path="/" component={Home} />
      {/**to do add router to Patient section */}
      <Route exact path="/Patient" component={Patient} />
      <Route path="/Patient/AccueilLabo" component={AccueilLabo} />
      <Route path="/Patient/AvantExamen" component={AvantExamen} />
      <Route path="/Patient/Documents" component={Documents} />
      <Route path="/Patient/Resultat" component={Resultat} />
      <Route path="/Patient/Urgences" component={Urgences} />
      {/**to do add router to Professional section */}
      <Route path="/Professional" component={Professional} />
      
      {/**to do add router to Services */}
      <Route path="/Contact" component={Contact} />
      {/**router to Login */}
      <Route path="/member" component={Login} />
      <Footer />
    </Flex>
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