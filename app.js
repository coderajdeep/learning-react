const heading = React.createElement("h1", {id : "heading", xyz: "abc"}, "Hello World");
// const paragraph = React.createElement("p", {}, "Created by React");
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(heading)
root.render(heading)
// root.render(paragraph)