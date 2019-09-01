import React from "react";
import { Route, Switch } from "react-router-dom";
import Flex from "./reFlexing";

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

export default () =>(
    <Flex style={{ padding: "0", margin: "0px" }}>
        <Header />
        <Switch>
        {/**to do add router to home */}
            <Route exact path="/" component={Home} />
            {/**to do add router to Patient section */}
            <Route path="/Patient" component={Patient} />
            <Route path="/Patient/AccueilLabo" component={AccueilLabo} />
            <Route path="/Patient/AvantExamen" component={AvantExamen} />
            <Route path="/Patient/Documents" component={Documents} />
            <Route path="/Patient/Resultat" component={Resultat} />
            <Route path="/Patient/Urgences" component={Urgences} />

            {/**to do add router to Professional section */}
            <Route path="/Professional" component={Professional} />
            
            {/**to do add router to Services */}
            <Route path="/Contact" component={Contact} />
        </Switch>
        <Footer />
    </Flex>
)