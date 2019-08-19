import React from "react"
const PageTabsText=({TextTitle, TextParagraphe})=>(
	<div className="col-md-12 tab-wrap">
		<div className="tab-content bg-light p-4 p-md-5 " id="v-pills-tabContent">
			<div className="tab-pane py-2 fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
				<div className="row departments">
					<div className="col-lg-4 order-lg-last d-flex align-items-stretch">
						<div className="img d-flex align-self-stretch" ></div>
					</div>
					<div className="col-lg-8">
						<h2>{TextTitle}</h2>
						<p>{TextParagraphe}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)
export default PageTabsText;