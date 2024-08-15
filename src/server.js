// importing required modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connectDb } = require("./config/db");

///importing routes
const category = require("./routes/categoryRoutes");
const subCategory = require("./routes/subcategoryRoutes");
const items = require("./routes/itemRoutes");

// configure dotenv file
dotenv.config();

// connection  to database
connectDb();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

/////defining routes for differnt section

// routes for category
app.use("/api/v1/category", category);
// routes for sub-category
app.use("/api/v1/subcategory", subCategory);
// routes for items
app.use("/api/v1/item", items);

// route for home route

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Yeeaaah server is running!!!!</h1>");
});

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
