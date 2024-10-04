// Import our dependancies
const express = require("express");
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

//Configure environment variables
dotenv.config();

// Create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//Test the connection
db.connect((err) => {
    // Connection is not successful
    if(err) {
        return console.log("Error connecting to the database", err)
    }

    // Connection i successful
    console.log("Succesfully connected to MySQL:", db.threadId)
})


// Retrieve all patients
// app.get('',(req, res) => {
//     const getPatients = "SELECT first_name FROM patients"
//     db.query(getPatients, (err, data) => {
//         // If i have an error
//         if(err) {
//             return res.status(400).send("Failed to get patients", err)
//         }

//         res.status(200).send(data)
//     })
// })

app.get('',(req, res) => {
    const getProviders = "SELECT provider_specialty FROM providers"
    db.query(getProviders, (err, data) => {
        // If i have an error
        if(err) {
            return res.status(400).send("Failed to get patients", err)
        }

        res.status(200).send(data)
    })
})


// Start and listen to the server
app.listen(3307, () => {
    console.log(`Server is running on port 3307...`)
});




