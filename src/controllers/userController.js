import User from "../models/User.js";

/*
? Get the data from body (req.body)
? Get the data from query (req.query)
? Get the data from params (req.params)
*/

export const getAllUsers = async (req, res) => {
  // Read
  try {
    const limit = req.query.limit || 0;
    const skip = req.query.skip || 0;
    const users = await User.find().skip(skip).limit(limit);
    res.status(200).send({
      success: true,
      total: users.length,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
  }
};
export const addUser = (req, res) => {
  // Create
  try {
    console.log("Reached Add User");
    const userDetails = req.body;
    const newUser = new User(userDetails);
    newUser.save();
    res.status(200).send({
      success: true,
      message: "User added successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
  }
};
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select("name role email");

    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (err) {
    F;
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role, password } = req.body;

    const user = await User.findByIdAndUpdate(id, {
      name,
      email,
      role,
      password,
    });

    res.status(200).send({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
  }
};
export const removeUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
      error: err,
    });
  }
};
