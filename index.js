const heading = document.createElement("h1");
const paragraph = document.createElement("p")
paragraph.innerHTML = "Created by JavaScript"
heading.innerHTML = "Hello World";
const root = document.getElementById("root");
root.appendChild(heading)
root.appendChild(paragraph)