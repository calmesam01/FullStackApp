const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/signUp");

const People = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

const Person = mongoose.model("Person", People);

const person1 = new Person({
    firstName: "Sam",
    lastName: "adas",
    email: "dsdxs@dwsdw.vo",
    password: "sfcdsfcdcv"
});

const person2 = new Person({
    firstName: "Samfced",
    lastName: "adgvrfas",
    email: "dsdxsrfgrsdfvrf@dwsdw.vo",
    password: "sfcrgrt34dsfcdcv"
});

// Person.insertMany([person1, person2], function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Inserted successfully");
//     }
// })

// Person.deleteMany(function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Deleted successfully");
//     }
// })

app.get("/", function (req, res) {
    res.render("app");
});

app.post("/", function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var pwd = req.body.pwd;

    person3 = new Person({
        firstName: fname,
        lastName: lname,
        email: email,
        password: pwd
    });

    person3.save();
    
    res.write("Thank you for signing up " + fname + " " + lname);
    res.write(" We have sent a verification link to " + email);
    res.end();
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});