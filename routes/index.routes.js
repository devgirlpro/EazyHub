const router = require("express").Router();
const { response } = require("express");
const User = require("../models/User");
const Vehicle = require("../models/Vehicle");

//get all the employees
router.get("/employees", (req, res) => {
  User.find().then((response) => {
    console.log("SERVER EMPLOYEES RESPOMSE=>", response);
    res.json(response);
  });
});

//create a new User
router.post("/employees", (req, res) => {
  const { firstName, lastName, phone, username, password } = req.body;
  User.create({ firstName, lastName, phone, username, password })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => next(err));
});

//get all the vehhicles
router.get("/vehicles", (req, res) => {
  Vehicle.find().then((response) => {
    console.log("SERVER VEHICLES RESPONSE =>", response);
    res.json(response);
  });
});

router.get("/employees/:id", (req, res) => {
  User.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => next(err));
});

router.get("/vehicles/:id", (req, res) => {
  Vehicle.findById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => next(err));
});

// router.get("/:id", (req, res, next) => {
//   Project.findById(req.params.id)
//     .then((project) => {
//       res.status(200).json(project);
//     })
//     .catch((err) => next(err));
// });

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

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
