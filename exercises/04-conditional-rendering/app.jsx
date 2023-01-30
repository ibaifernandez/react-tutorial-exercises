import React from "react";
import ReactDOM from "react-dom";

const Alert = (props) => {
	if (props.show === false) {
		return (
			<div className="alert alert-danger" role="alert">
				This is a {props.text} that you should <strong>not</strong> see as its "show" property is "{props.showText}".
			</div>
		);
	} else {
		return (
			<div className="alert alert-danger" role="alert">
				This is a {props.text} that you should see as its "show" property is "{props.showText}".
			</div>
		);
	}
};

ReactDOM.render(
	<div>
		<Alert show={false} text="primary alert" showText="false" />
		<Alert show={true} text="primary alert" showText="false" />
	</div>,
	document.querySelector("#myDiv")
);
