const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(process.env.PORT || 4444, () => {
  console.log(`🚀 Listening at http:[...]:4444`);
});
