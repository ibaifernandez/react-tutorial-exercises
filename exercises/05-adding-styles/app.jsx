import React from "react";
import ReactDOM from "react-dom";

const mySuperStyles = {
	fontSize: "16px",
	background: "black",
	border: "1px solid yellow",
};

const Badge = (props) => {
	return (
		<button style={mySuperStyles} type="button" className="btn btn-primary">
			{props.label}
			<span className="badge badge-light">{props.number}</span>
		</button>
	);
};

ReactDOM.render(<Badge label="Notifications" number="2" />, document.querySelector("#myDiv"));
