const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  let errors = { email: "", password: "" };
  //duplicate key error handling
  if (err.code === 11000) {
    //updating email error
    errors.email = "user already exist with this email";
    return errors;
  }

  //validation errors
  console.log(err.message);
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message; //updating erros with specified error message
    });
  }
  return errors;
};
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "this is my secret", {
    expiresIn: maxAge,
  });
};
module.exports.singup_get = (req, res) => {
  res.render("signup");
};
module.exports.login_get = (req, res) => {
  res.render("login");
};
module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt',token,{httpOnly:true,maxAge:1000*maxAge})
    res.status(201).json({ user:user._id });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};
module.exports.login_post = (req, res) => {
  res.send("authenticate login");
};
//exporting get,post methods
