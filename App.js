// const heading = React.createElement("h1", {id: "heading"}, "Hello from react.js");
// console.log(heading); //React.createElement is nothing but it is an object, and this object becomes HTML after rendering that the browser understands and puts setup into the DOM
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading)

    const parent = React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id: "child1"}, 
    [
        React.createElement("h1", {},"i'm an h1 tag"),
        React.createElement("h2", {},"i'm an h1 tag")
    ]),
        React.createElement("div", {id: "child2"}, 
    [
        React.createElement("h1", {},"i'm an h1 tag"),
        React.createElement("h2", {},"i'm an h1 tag")
    ])
    ]
    );
     
    console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);