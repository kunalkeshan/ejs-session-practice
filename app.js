const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes/routes");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server has started at http://localhost:" + PORT);
});
