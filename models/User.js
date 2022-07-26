const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    avatar: String,
    personalNumber: Number,
    available: Boolean,
    role: {
      type: String,
      enum: ["manager", "driver", "officeWorker"],
    },
    personalInfo: {
      firstName: String,
      lastName: String,
      email: String,
      phone: Number,
      birthdate: Date,
      nationality: String,
      idCardExpiryDate: Date,
      idNumber: String,
      drivingLicenseNumber: String,
      taxId: Number,
      socialInsuranceNumber: String,
      healthInsurance: String,
      entry: Date,
      bank: String,
      iban: String,
      exit: Date,
    },
    address: {
      street: String,
      houseNumber: Number,
      postCode: Number,
      city: String,
    },
    file: String,
    username: {
      type: String,
      unique: true
    },
    password: {
      type: String,
    },
    posts: {
      type: Schema.Types.ObjectId,
      ref: "Post"
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "location",
    },
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
