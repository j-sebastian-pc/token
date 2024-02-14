"use strict";

var express = require('express');
var app = express();
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});