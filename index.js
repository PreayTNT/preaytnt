const app = require('express')();
app.get("/", (req, res, next) => {
  res.sendFile("index.html", { root: __dirname });
});