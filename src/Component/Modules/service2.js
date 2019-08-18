import React from "react";
import styled from "styled-components";
import { Box } from "../../reFlexing";
import "./styleService2/style.css";
import { Resultat, Equipment, Profesionnel, Connect } from "../../img";

const Box2 = styled.div`
  margin-top: -100px;
`;

const ReadMore = ()=> <a href="!#" className="btn_2">  Lire plus  </a>


const WhyUS = () => (
  <Box className="col-xl-4 col-md-4 align-self-center">
    <Box className="single_feature_text ">
      <h2>Pourquoi le laboratoire Fes ?</h2>
      <p>
      La mission de Laboratoire Fes est de contribuer pleinement à votre prise en charge, 
      en proposant, au-delà des résultats d’examens, notre expertise en biologie médicale.
      En complément de l’examen clinique, les résultats de biologie médicale apportent souvent un éclairage déterminant, 
      pour la prise de décision des prescripteurs. Les biologistes médicaux de Laboratoire Fes participent, ainsi, 
      activement à la prédiction, à la prévention et au dépistage des pathologies, ainsi qu’à leur traitement 
      mais aussi au suivi de l’état de santé des patients.
      Consciente de l’importance de la biologie médicale dans les soins prodigués à ses patients, 
      l’équipe Laboratoire Fes est impliquée au quotidien dans une démarche d’excellence, 
      se traduisant par notre engagement dans un processus qualité en vue du maintien de l’accréditation 
      et sur le plan technique et médical et par la présence d’un réseau d’experts. Pour satisfaire à ces exigences, 
      Laboratoire Fes ne cesse d’évoluer par l’utilisation de technologies innovantes 
      et s’adapte en permanence aux nouvelles avancées scientifiques.
      </p>
      
    </Box>
  </Box>
);

const Cards = ({ icon, title, text }) => (
  <Box className="col-lg-6 col-sm-6">
    <Box className="single_feature">
      <Box className="single_feature_part">
        <span className="single_feature_icon">
          <Equipment width="35px" height="35px" fill="green" />
        </span>
        <h4>{title}</h4>
        <p>{text}</p>
      </Box>
    </Box>
  </Box>
);

const OurEquipement = () => (
  <Cards
    title="Nos Equipements"
    text="Darkness multiply rule Which from without life creature
                                        blessed give moveth moveth seas make day which divided
                                        our have."
    icon={<Equipment width="35px" height="35px" fill="green" />}
  />
);

const OurProfessionals = () => (
  <Cards
    title="Professionelles"
    text="Darkness multiply rule Which from without life creature
                                          blessed give moveth moveth seas make day which divided
                                          our have."
    icon={<Profesionnel width="35px" height="35px" fill="green" />}
  />
);

const OurReports = () => (
  <Cards
    title="Nos resultats"
    text="Darkness multiply rule Which from without life creature
                                blessed give moveth moveth seas make day which divided
                                our have."
    icon={<Resultat width="35px" height="35px" fill="green" />}
  />
);

const OurPartners = () => (
  <Cards
    title="Nos partenariats"
    text="Darkness multiply rule Which from without life creature
                              blessed give moveth moveth seas make day which divided
                              our have."
    icon={<Connect width="35px" height="35px" fill="green" />}
  />
);

const S2 = () => {
  return (
    <Box2 className="feature_part padding_top">
      <Box className="container">
        <flex className="row">
          <WhyUS />
          <Box className="col-lg-8 col-md-8">
            <Box className="feature_item">
              <flex className="row">
                <OurEquipement />
                <OurProfessionals />
                <OurReports />
                <OurPartners />
              </flex>
            </Box>
          </Box>
        </flex>
      </Box>
    </Box2>
  );
};

export default S2;
