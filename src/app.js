const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.resolve(__dirname, "./public")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./view/home.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`running in port ${port}`));
