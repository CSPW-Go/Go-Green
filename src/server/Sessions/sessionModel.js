const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// session schema model for mongoDB
const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});

module.exports = mongoose.model("Session", sessionSchema);
