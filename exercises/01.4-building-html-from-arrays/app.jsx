import React from "react"; // Main React.js library
import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

const navlinkItems = [
	<li key="google" className="nav-item">
		<a className="nav-link" href="#">
			Link to google.com
		</a>
	</li>,
	<li key="facebook" className="nav-item">
		<a className="nav-link" href="#">
			Link to facebook.com
		</a>
	</li>,
	<li key="amazon" className="nav-item">
		<a className="nav-link" href="#">
			Link to amazon.com
		</a>
	</li>,
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
