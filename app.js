import React from "react";
import ReactDOM from "react-dom/client"

const headingJSX = <h1>HTML like syntex</h1>
const paragraphOne = React.createElement("p", { id: "p1" }, "Paragraph One")
const paragraphTwo = React.createElement("p", { id: "p2" }, "Paragraph Two")
const divs = React.createElement("div", { id: "paragraphs" }, [paragraphOne, paragraphTwo])
const heading = React.createElement("h1", { id: "heading" }, "Learning React")
const pages = (<div>
    <h1>JSX Heading</h1>
    <p><i>JSX</i> Paragraph</p>
</div>)
const page = React.createElement("div", { id: "page" }, [heading, headingJSX, divs, pages])
const root = ReactDOM.createRoot(document.getElementById("root"))

console.log(headingJSX, heading)
root.render(page)