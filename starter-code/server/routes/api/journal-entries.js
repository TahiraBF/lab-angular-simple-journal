const express       = require('express');
const router        = express.Router();
const Journal       = require('../../models/journal-entry');

router.get("/api/journal-entries", (req, res, next) => {
  Journal.find({},(err,docs) => {
    res.json({docs});
  });

});

router.get("/api/journal-entries/:id", (req, res, next) => {
  let entryId = req.params.id;
  Journal.findOne({"_id": entryId},(err, jEntry) => {
    if (err){
      console.log("error find entry");
    }
    res.json(jEntry);
  });

});

module.exports = router;
