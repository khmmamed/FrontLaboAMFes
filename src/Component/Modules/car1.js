import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

import {Whatsapp} from "../../img";

import "../../styles.css";

const CarouselItem = ({items}) => (
  items.map(item=>
    <MDBCarouselItem itemId={item.id}>
      <MDBView>
        <img
          className="d-block w-100"
          src={item.image.link}
          alt={item.image.alt}
        />
        <MDBMask overlay="black-strong" />
      </MDBView>
      <MDBCarouselCaption className="cap">
        <h3 className="h">
          {item.title}
        </h3>
        <p className="hh">{item.text}</p>
        <button className="btnRdv"><Whatsapp height= {"30px"} width={"30px"}/>+212 637 521-701</button>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  )
)

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <CarouselItem items={[
            { id : "1", image : {link : "./picture/Laboratoire_fes_1.jpg", alt: "Laboratoire Fes"}, 
              title:"Laboratoire Fes, RECUEIL ET ANALYSE D'ÉCHANTILLONS BIOLOGIQUES", text : "Laboratoire de biologie medicale"},
            { id : "2", image : {link : "./picture/Laboratoire_fes_2.jpg", alt: "Laboratoire Fes"}, 
              title:"Laboratoire Fes, RECUEIL ET ANALYSE D'ÉCHANTILLONS BIOLOGIQUES", text : "Laboratoire de biologie medicale"},
            { id : "3", image : {link : "./picture/Laboratoire_fes_3.jpg", alt: "Laboratoire Fes"}, 
              title:"Laboratoire Fes, RECUEIL ET ANALYSE D'ÉCHANTILLONS BIOLOGIQUES", text : "Laboratoire de biologie medicale"},
            { id : "4", image : {link : "./picture/Laboratoire_fes_4.jpg", alt: "Laboratoire Fes"}, 
              title:"Laboratoire Fes, RECUEIL ET ANALYSE D'ÉCHANTILLONS BIOLOGIQUES", text : "Laboratoire de biologie medicale"},
            { id : "5", image : {link : "./picture/Laboratoire_fes_5.jpg", alt: "Laboratoire Fes"}, 
              title:"Laboratoire Fes, RECUEIL ET ANALYSE D'ÉCHANTILLONS BIOLOGIQUES", text : "Laboratoire de biologie medicale"}
          ]} />
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
