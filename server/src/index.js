const express = require("express");

const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(require("./routes/index"));

app.listen(3000, () => {
  console.log("3000");
});
