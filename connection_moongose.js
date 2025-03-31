const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB with error handling
mongoose.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

const db = mongoose.connection;

// User model definition
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

// Signup route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists by email
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send("Email already exists");
  }

  // Create new user
  const user = new User({
    name: username,
    email: email,
    password: password,
  });

  try {
    // Save user and await the result
    await user.save();
    res.json({
      msg: "User created successfully",
    });
  } catch (error) {
    res.status(500).send("Error creating user: " + error.message);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
