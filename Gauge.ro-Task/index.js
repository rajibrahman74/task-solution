const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// user data
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

// route handlers
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Start the server
app.get("/", (req, res) => {
  res.send("user server is running");
});

app.listen(port, () => {
  console.log(`user server is in running on port: ${port}`);
});