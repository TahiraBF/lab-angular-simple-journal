const express       = require('express');
const router        = express.Router();
const Journal       = require('../../models/journal-entry');

router.get("/api/journal-entries", (req, res, next) => {
  Journal.find({},(err,docs) => {
    res.json({docs});
  });

});

router.post("/api/journal-entries", (req, res) => {
    let newEntry = new Journal({
      date: new Date(),
      title: req.body.title,
      content: req.body.content
    });
//
    newEntry.save((err)=>{
      if (err){
        console.log("error saving entry");
      }
      return res.json({ message: 'New entry saved!' });
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
