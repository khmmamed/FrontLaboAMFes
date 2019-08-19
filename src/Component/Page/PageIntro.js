import React from "react"
const PageIntro = ({text, heading, subHeading}) =>(
	<div className="row justify-content-center mb-5 pb-2">
		<div className="col-md-8 text-center heading-section ">
			<span className="subheading">{subHeading}</span>
			<h2 className="mb-4">{heading}</h2>
			<p>{text}</p>
		</div>
	</div>
)
export default PageIntro