import React from "react";
import ReactDOM from "react-dom";

// add the green inside this function
const Alert = (props) => {
	const colorClasses = {
		red: "alert-danger",
		orange: "alert-warning",
		green: "alert-success",
	};
	if (colorClasses[props.color] === undefined) {
		alert(`The color ${props.color} is not in the possible list of colors`);
	} else {
		return (
			<div className={`alert ${colorClasses[props.color]}`} role="alert">
				{props.text}
			</div>
		);
	}
};

ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.querySelector("#myDiv")
);
