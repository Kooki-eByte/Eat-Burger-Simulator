const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

// get : all
router.get("/", (req, res) => {
  burger.all((data) => {
    console.log(burgerObj);
    res.render("index", { burger: data });
  });
});

// post : create
router.post("/api/burger", (req, res) => {
  let burgerName = req.body;
  burger.create(burgerName, (data) => {
    res.json({ id: data.id });
  });
});

// put : update
router.put("/api/burger/:id", (req, res) => {
  let burgerId = req.params.id;
  burger.update(burgerId, (data) => {
    if (data.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;