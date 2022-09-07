const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//static signup method
userSchema.static.signup = async (email, password) => {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email in use");
  }

  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

mondele.exports = mongoose.model("user", userSchema);
