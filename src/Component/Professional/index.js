import React from "react"
import "../ProfessionalStyle/style1.css";
import {PageIntro, PageTabs } from "../Page"
import { Route, Switch } from "react-router-dom";


import Chat from "./Chat";
import Regles from "./Regles";
import Partenariat from "./Partenariat";
import Contributeur from "./Contributeur";
import Statistique from "./Statistique";

export default ()=>(
<div>        
    <section className="ftco-section">
        <div className="container">
            <PageIntro 
                text="La mission de LaboAMFes est, de contribuer pleinement à votre prise en charge, en proposant,
                      au-delà des résultats d’examens, notre expertise en biologie médicale.
                      En complément de votre examen clinique et autres investigations, 
                      les résultats de biologie médicale vous apportent souvent un éclairage déterminant, 
                      pour votre prise de décision. Les biologistes médicaux Biofutur participent, ainsi, 
                      activement à la prédiction, à la prévention et au dépistage des pathologies, 
                      ainsi qu’au traitement et au suivi de l’état de santé de vos patients.					
                      Consciente de l’importance de la biologie médicale dans les soins prodigués à ses patients, 
                      l’équipe Biofutur est impliquée au quotidien dans une démarche d’excellence, 
                      se traduisant sur le plan de la qualité, par notre engagement dans un processus 
                      qualité en vue du maintien de l’accréditation et sur le plan technique et médical 
                      et par présence d’un réseau d’experts. Pour satisfaire à ces exigences, 
                      Biofutur ne cesse d’évoluer par l’utilisation de technologies innovantes 
                      et s’adapte en permanence aux nouvelles avancées scientifiques."
                heading="Professionelles"
                subHeading="La Charte LaboAMFes"
             />
            <div className="ftco-departments">
                <div className="row">
                    <PageTabs tabs={[
                        {text : "Espace PRELEVEUR"	, link: "/Professional/EspacePreleveur"}, 
                        {text : "Espace Medecin"	, link: "/Professional/EspaceMedecin"},
                        {text : "Assurance Qualite"	, link: "/Professional/AssuranceQualite"},
                        {text : "COLLABORATEUR"		, link: "/Professional/COLLABORATEUR"},
                        {text : "PALER A NOUS"		, link: "/Professional/PALER-A-NOUS"},
                    ]} />
                    <Switch>
                        <Route path="/Professional/EspacePreleveur"   component={Chat} />
                        <Route path="/Professional/EspaceMedecin"     component={Regles} />
                        <Route path="/Professional/AssuranceQualite"  component={Partenariat} />
                        <Route path="/Professional/COLLABORATEUR"     component={Contributeur} />
                        <Route path="/Professional/PALER-A-NOUS"      component={Statistique} />
                    </Switch>
                </div>
            </div>
        </div>
    </section>
</div>

)