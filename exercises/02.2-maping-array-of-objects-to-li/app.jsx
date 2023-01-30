import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

const myMappingFunction = (planet, i) => {
	return (<li key={i} className="list-group-item">{planet}</li>)
} 

const planetsInHTML = planets.map(myMappingFunction);

const content = (<ul className="list-group m-5">{planetsInHTML}</ul>);

ReactDOM.render(content, document.querySelector("#myDiv"));


