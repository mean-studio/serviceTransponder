const express = require("express");
const router = express.Router();
const ObjectID = require("mongodb").ObjectID;
const mongojs = require("mongojs");
const db = mongojs("service_transponder", ["users"]);

// Error handling
const sendError = (err, res) => {
 response.status = 501;
 response.message = typeof err == "object" ? err.message : err;
 res.status(501).json(response);
};

// Response handling
let response = {
 status: 200,
 data: [],
 message: null
};

// Get users
router.get("/users", (req, res, next) => {
 db.users.find((err, users) => {
  if (err) return next(err);
  response.data = users;
  res.json(response);
 });
});

module.exports = router;