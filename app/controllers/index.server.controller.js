exports.render = function (req, res) {

    // Data to pass to the EJS view
    const myName = "Simon Turcic"; 
    const headerTitle = "The MEAN Stack";

    const definitions = [
        {
            term: "MongoDB",
            definition: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents allowing dynamic schemas for modern applications."
        },
        {
            term: "Express",
            definition: "Express is a lightweight web application framework for Node.js that simplifies building APIs and handling server-side routing efficiently and cleanly."
        },
        {
            term: "Angular",
            definition: "Angular is a TypeScript-based front-end framework used to build dynamic, component-driven web applications with strong structure and maintainability."
        },
        {
            term: "Node.js",
            definition: "Node.js is a JavaScript runtime environment that allows developers to run server-side code and handle asynchronous operations efficiently."
        }
    ];

    res.render("index", {
        myName: myName,
        headerTitle: headerTitle,
        definitions: definitions
    });
};






