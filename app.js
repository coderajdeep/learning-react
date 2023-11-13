import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id: "heading"}, "Hello World!");
const paragraphOne = React.createElement("p", {id: "p1"}, "Paragraph one");
const paragraphTwo = React.createElement("p", {id: "p2"}, "Paragraph two");
const divElements = React.createElement("div", {id: "divIds"}, [paragraphOne, paragraphTwo]);
const divs = React.createElement("div", {id: "divId"}, [heading, divElements]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(divs)
root.render(divs)