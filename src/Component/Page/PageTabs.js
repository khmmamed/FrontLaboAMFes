import React from "react";
import {
	NavLink
  } from "reactstrap";
const PageTabs = ({tabs}) =>(
	<div className="col-md-12 nav-link-wrap">
	    <div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
			{tabs.map(tab=>
				<NavLink className="nav-link"  href={tab.link} >{tab.text}</NavLink>
			)}
	    </div>
	</div>
)
export default PageTabs