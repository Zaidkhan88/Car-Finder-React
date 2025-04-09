const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/api/cars", (req, res) => {
  fs.readFile("./cars.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading data");
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`🚗 Car API running at http://localhost:${PORT}`);
});
