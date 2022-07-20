const User = require("./models/User");
const Vehicle = require("./models/Vehicle");

const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/library')
mongoose.connect(
  "mongodb+srv://admin:GingerMonster-22@eazycluster.villekn.mongodb.net/?retryWrites=true&w=majority"
);

const users = [
  {
    avatar: "personalfacePic",
    personalNumber: 202201,
    available: true,
    role: "manager",
    personalInfo: {
      firstName: "Manager1",
      lastName: "manajerpoor",
      email: "Manager@gmail.com",
      phone: 0049156789965,
      birthdate: 07 - 11 - 1991,
      nationality: "Irish",
      idCardExpiryDate: 08 - 08 - 2024,
      idNumber: "L4G077VRS",
      drivingLicenseNumber: "C010HPW77",
      taxId: 20978945322,
      socialInsuranceNumber: "77660303H070",
      healthInsurance: "AOK Nordost",
      entry: 25 - 07 - 2020,
      bank: "Berliner Sparkasse",
      iban: "DE82 1040 6578 9977 3546 87",
    },
    address: {
      street: "friedricher str",
      houseNumber: 34,
      postCode: 16786,
      city: "Berlin",
    },
    file: "select some file",
    loginInfo: {
      username: "ManagerMaster",
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
