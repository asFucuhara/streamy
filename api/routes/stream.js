const express = require("express");
const mongoose = require("mongoose");

const Stream = mongoose.model("Stream");

const idNorm = require("./idNormalizer");

const router = express.Router();

router.get("/", async (req, res) => {
  const streams = await Stream.find({});
  res.send(idNorm(streams));
});

router.get("/:id", async (req, res) => {
  console.log("before");
  const stream = await Stream.findById({ _id: req.params.id });
  res.send(idNorm(stream));
});

router.post("/", async (req, res) => {
  try {
    const stream = new Stream(req.body);
    await stream.save();
    res.status(201).send(idNorm(stream));
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res) => {
    try{
        await Stream.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch(e){
        res.status(500).send(e);
    }
});

router.patch('/:id', async (req, res) => {
    try{
        await Stream.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send();
    } catch(e) {
        res.status(500).send(e);
    }
})

module.exports = router;
