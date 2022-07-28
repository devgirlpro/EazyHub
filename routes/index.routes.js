const express = require("express");
const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");
const Vehicle = require("../models/Vehicle");

const fileUploader = require("../config/cloudinary.config");

//get all the employees
router.get("/employees", (req, res) => {
  User.find().then((response) => {
    // console.log("SERVER EMPLOYEES RESPOMSE=>", response);
    res.json(response);
  });
});

// POST "/api/upload" => Route that will receive an image, send it to Cloudinary via the fileUploader and return the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  // console.log("file is: ", req.file)

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }

  // Get the URL of the uploaded file and send it as a response.
  // 'secure_url' can be any name, just make sure you remember to use the same when accessing it on the frontend

  res.json({ secure_url: req.file.path });
});

//create a new User
router.post("/employees", (req, res) => {
  // console.log("req.body =>", req.body);
  const {
    avatar,
    role,
    firstName,
    lastName,
    phone,
    street,
    houseNumber,
    postCode,
    city,
    username,
    password,
  } = req.body;
  User.create({
    avatar,
    role,
    personalInfo: { firstName, lastName, phone },
    address: { street, houseNumber, postCode, city },
    username,
    password,
  }).then((user) => {
    res.status(201).json(user);
    // console.log("CREATED USER =>", user);
  });
  // .catch((err) => next(err));
});

//get all the vehhicles
router.get("/vehicles", (req, res) => {
  Vehicle.find().then((response) => {
    // console.log("SERVER VEHICLES RESPONSE =>", response);
    res.json(response);
  });
});

//get specific user info
router.get("/employees/:id", (req, res) => {
  User.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => next(err));
});

//get specific cehicle info
router.get("/vehicles/:id", (req, res) => {
  Vehicle.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => next(err));
});

/* GET employee page */
//access to the user from db
// router.get("/employee", (req, res, next) => {
//   User.find()
//    .populate("vehicle")
//    .then(userData => {
//       res.render("employee", {userData})
//    })
//    .catch(error => console.log(error))
// });

// router.post('/employee', (req, res, next) => {
//   const {username, password, name, lastName, street, email, phone} = req.body
//   // validation
//   if (password.length < 4) {
//     res.render('employee', { message: 'Password has to be 4 chars min' })
//     return
//   }
//   // check if username is not empty
//   if (username === '') {
//     res.render('signup',{layout: false} , { message: 'Username cannot be empty' })
//     return
//   }

module.exports = router;
