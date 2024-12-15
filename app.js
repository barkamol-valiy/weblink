const express = require("express");
const app = express();
const PORT = 5001;

// Route to handle GET request
app.get("/", (req, res) => {
  res.send("homepage");
});
app.get("/test-endpoint", (req, res) => {
  console.log("GET request received from ESP32!");
  res.send("Hello from the backend!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at :${PORT}`);
});
