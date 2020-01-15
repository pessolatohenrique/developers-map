const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");

const app = express();

app.use(express.json());
app.use(routes);
mongoose.connect(
  "mongodb+srv://pessolatohenrique:admin@123@cluster0-0sqra.mongodb.net/devmap?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(3000);
