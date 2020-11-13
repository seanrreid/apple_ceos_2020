const express = require("express"),
  request = require("request"),
  router = express.Router();

router.get("/", function (req, res, next) {
  const { url } = req.query;
  request(url).pipe(res);
});

module.exports = router;
