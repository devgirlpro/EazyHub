const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const vehicleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "lastname",
  },
  avatar: String,
  brand: String,
  model: String,
  color: String,
  license: String,
  available: Boolean,
  damagePhoto: String,
  damageDescription: String,
});

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
