import React from "react";
import ReactDOM from "react-dom";

const Alert = (props) => {
	if (props.color === "red") {
		return (
			<div className="alert alert-danger" role="alert">
				{props.text}
			</div>
		);
	} else {
		return (
			<div className="alert alert-warning" role="alert">
				{props.text}
			</div>
		);
	}
};

ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);
