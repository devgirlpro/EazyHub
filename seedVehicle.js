
const Vehicle = require("./models/Vehicle");
const User = require("./models/User");

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:GingerMonster-22@eazycluster.villekn.mongodb.net/?retryWrites=true&w=majority"
);

const vehicles = [
    {
        // personalInfo: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'lastName',
        //   },
        avatar: "linkToPhoto",
        brand: "Toyota",
        model: "Proace",
        color: "white",
        license: "B YH 1991",
        available: true,
        damagePhoto: "linkToPhoto", 
        damageDescription: "Flat Tire 21.07.2022"
        


        
    },  

];



Vehicle.insertMany(vehicles)
  .then((vehicles) => {
    console.log(`Success - added ${vehicles.length} to the db`);
  })
  .catch((err) => {
    console.log(err);
  });


//   module.exports = Vehicle;





