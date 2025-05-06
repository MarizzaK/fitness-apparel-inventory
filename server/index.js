const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");

const app = express();

const corsOptions = {
  origin: "*", // tillåt alla domäner under utveckling
};

app.use(cors(corsOptions));
app.use(express.json());

const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
