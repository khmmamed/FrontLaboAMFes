import React from "react"
import "../ProfessionalStyle/style1.css";
import {PageIntro, PageTabs, PageTabsText } from "../Page"

const ChartPatient =()=><div>
	<p>1. Accueillir toutes les personnes sans discrimination et en mettant en œuvre les meilleures conditions d’accessibilité.</p>
	<p>2. Agir uniquement dans l’intérêt du patient en dehors de toute pression ou considération financière ou politique, lors de la réalisation des analyses .</p>
	<p>3. Respecter toutes les dispositions légales, réglementaires et normatives encadrant la biologie médicale.</p>
	<p>4. Respecter le secret professionnel et les règles de confidentialité les plus strictes.</p>
	<p>5. S’assurer que les différentes activités des laboratoires Biofutur sont réalisées par des professionnels compétants et habilités.</p>
	<p>6. Garantir la qualité des résultats en respectant des procédures répondant aux exigences réglementaires et normatives, tout au long du processus de l’analyse.</p>
	<p><em>Le laboratoire peut ainsi être amené à refuser un échantillon, qui ne permettrait pas d’effectuer les examens dans les conditions prédéterminées. Il en informe alors le patient et/ou le prescripteur. Des contrôles qualité quotidiens permettent de valider la phase analytique du processus. En accord avec le prescripteur et dans l’intérêt du patient, nos biologistes médicaux peuvent être amenés à effectuer des analyses complémentaires ou supprimer des examens redondants.</em></p>
	<p>7. Nos biologistes médicaux s’assurent que les résultats délivrés soient correctement interprétés pour être utiles dans la prise en charge médicale globale du patient.</p>
</div>


const Professional=()=>(
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
						<PageTabsText 
							TextTitle = "TRANSPORT DES ÉCHANTILLONS"
							TextParagraphe="On her way she met a copy. The copy warned the Little Blind Text, 
											that where it came from it would have been rewritten a thousand 
											times and everything that was left from its origin would be the word."
						/>
					</div>
				</div>
			</div>
    	</section>
    </div>

)

export default Professional;