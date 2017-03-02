const express       = require('express');
const router        = express.Router();
const Journal       = require('../../models/journal-entry');

router.get("/api/journal-entries", (req, res, next) => {
  Journal.find({},(err,docs) => {
    res.json({docs});
  });

});

module.exports = router;
