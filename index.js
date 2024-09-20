// const express=require('express');
// const mongoose=require('mongoose');
// const app= express();
// mongoose.connect('mongodb+srv://kartikbalaji21:b8Hz7EQyJM898gP5@buzzybotsuserbase.9x2yh.mongodb.net/UserDataBase');

// const recordSchema = new mongoose.Schema({
//     value: { type: String, required: true },
//   });
// const Record = mongoose.model('Record', recordSchema);
// app.use(cors());


// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     UserModel.findOne({ email: email }).then((user) => {
//       if (user) {
//         bcrypt.compare(password, user.password, (err, response) => {
//           if (respone) {
//             res.json("Success");
//           } else if (err) {
//             res.json("The password is incorrect");
//           }
//         });
//       } else {
//         res.json("No record exists");
//       }
//     });
//   });
  
//   //to register the user
//   app.post("/register", (req, res) => {
//     const { name, email, password } = req.body;
//     bcrypt
//       .hash(password, 10)
//       .then((hash) => {
//         UserModel.create({ name, email, password: hash })
//           .then((user) => res.json(user))
//           .catch((err) => res.json(err));
//       })
//       .catch((err) => console.log(err.message));
//     UserModel.create(req.body.then((Users) => res.json).catch((err) => res.json));
//   });
  
//   app.listen(3001, () => {
//     console.log("server is running");
//   });









////
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const UserModel = require("./models/Users");
// const bcrypt = require("bcrypt");

//this will transport the data from the front-end to the back-end and the back-end to the front-end
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://kartikbalaji21:b8Hz7EQyJM898gP5@buzzybotsuserbase.9x2yh.mongodb.net/"
);

//to check if the user is already registered
app.post("/UserDataBase", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
        if(password==user.password){
            res.json("Success");
        } else if (password!=user.password) {
            res.json("The password is incorrect");
          }
    } else {
      res.json("No record exists");
    }
  });
});

//to register the user
app.post("/UserDataBase", (req, res) => {
  const { email, password } = req.body;
  ((hash) => {
      UserModel.create({email, password: hash })
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
  UserModel.create(req.body.then((Users) => res.json).catch((err) => res.json));
});

app.listen(3001, () => {
  console.log("server is running");
});