
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
        avatar: "https://imgr1.auto-motor-und-sport.de/Tesla-Model-S-Plaid-169FullWidth-6a1b0e1a-1725896.jpg",
        brand: "Tesla",
        model: "Model S Plaid",
        color: "white",
        license: "B AZ 1992",
        available: true,
        damagePhoto: "linkToPhoto", 
        damageDescription: ""
        


        
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





