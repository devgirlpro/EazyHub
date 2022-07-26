const User = require("./models/User");
const Vehicle = require("./models/Vehicle");

const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/library')
mongoose.connect(
  "mongodb+srv://admin:GingerMonster-22@eazycluster.villekn.mongodb.net/?retryWrites=true&w=majority"
);

const users = [
  {
    avatar: "https://i.ibb.co/K9wcfMK/Terry-Chall.jpg",
    personalNumber: 202221,
    available: true,
    role: "driver",
    personalInfo: {
      firstName: "Terry",
      lastName: "Chall",
      email: "tchall@gmail.com",
      phone: 17228930122,
      birthdate: 13 - 11 - 1992,
      nationality: "American",
      idCardExpiryDate: 25 - 09 - 2024,
      idNumber: "X8392KS9",
      drivingLicenseNumber: "A929HJ011",
      taxId: 5029529818,
      socialInsuranceNumber: "12819000G442",
      healthInsurance: "DAK Gesundheit",
      entry: 15 - 01 - 2022,
      bank: "N26",
      iban: "DE50 5788 2748 2343 4938 12",
    },
    address: {
      street: "Flotowstr. ",
      houseNumber: 7,
      postCode: 12034,
      city: "Berlin",
    },
    file: "select some file",
    loginInfo: {
      username: "Tchall",
      password: "123123",
    },
  },
];

User.insertMany(users)
  .then((users) => {
    console.log(`Success - added ${users.length} to the db`);
  })
  .catch((err) => {
    console.log(err);
  });

// const vehicles = [
//   {
//     brand: "Toyota",
//     model: "Proace",
//     color: "White",
//     // vehicle: "62c2ac3adadfa96a36af4a5a",
//     license: "B-YM 9999",
//   },
//   {
//     brand: "Tesla",
//     model: "S",
//     color: "Black",
//     // vehicle: "62c2ac3adadfa96a36af4a5a",
//     license: "B-Z 369",
//   },
//   {
//     brand: "Volkswagen",
//     model: "Käfer",
//     color: "Yellow",
//     // vehicle: "62c2ac3adadfa96a36af4a5a",
//     license: "B-U 0711",
//   },
// ];

// Vehicle.insertMany(vehicles)
//   .then((vehicles) => {
//     const vehicleId = vehicles[0]._id;
//     User.findOneAndUpdate({}, { vehicle: vehicleId }).then((updatedUser) => {
//       console.log(updatedUser);
//     });
//     console.log(vehicleId);
//     console.log(`Success - added ${vehicles.length} to the db`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
