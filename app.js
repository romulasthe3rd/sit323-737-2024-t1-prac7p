const express = require("express"); //Imports the express module
const app = express(); //Creates an express application
const port = 3000; //defining the port

//Routing to serve the index.html file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

//Route to process the collection of inputs received
app.get("/result/:arithmetic/:num1/:num2", function(req, res) {
    const { arithmetic, num1, num2 } = req.params;
   
    let result;
   //adding arithmetic operations accordingly
    switch(arithmetic) {
        case "add":
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case "subtract":
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case "multiply":
            result =parseFloat(num1) * parseFloat(num2);
            break;
        case "divide":
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            //Returning an error message if something went wrong
            return res.status(400).send("Sorry but this contains an invalid operation please try again...");
    }
    //sends the result back as a response
    res.send(`Result: ${result}`);
});

//Start the server and listen to the port accordingly.
app.listen(port, function() {
    console.log("Server is listening on port " + port);
});