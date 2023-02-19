const express = require("express");
// const jwt = require("jsonwebtoken");
const { NotesModel } = require("../Model/notes.model");
const notesrouter = express.Router();
const jwt = require("jsonwebtoken");

notesrouter.get("/", async (req, res) => {
  try {
    const notes = await NotesModel.find();
    res.send(notes);
  } catch (error) {
    console.log(error);
  }
});

notesrouter.post("/addnotes", async (req, res) => {
  try {
    let user = new NotesModel(req.body);
    await user.save();
    res.send("notes added success");
  } catch (err) {
    console.log(err);
  }
});

notesrouter.patch("/updatenotes/:id", async (req, res) => {
  const user = await NotesModel.findOne({ _id: req.params.id });
  try {
    if (user.userId != req.body.userId) {
      res.send("user not Authorised");
    } else {
      await NotesModel.findByIdAndUpdate(req.params.id, req.body);
      res.send("notes updated success");
    }
  } catch (error) {
    console.log(error);
  }
});

notesrouter.delete("/deletenotes/:id", async (req, res) => {
  const user = await NotesModel.findOne({ _id: req.params.id });
  try {
    if (user.userId != req.body.userId) {
      res.send("user not Authorised");
    } else {
      const user = await NotesModel.findByIdAndDelete(req.params.id);
      res.send("deleted success");
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = {
  notesrouter,
};
