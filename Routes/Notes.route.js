const express = require("express");
const jwt = require("jsonwebtoken");
const { NotesModel } = require("../Model/notes.model");
const notesrouter = express.Router();

notesrouter.get("/", async (req, res) => {
  try {
    const notes = await NotesModel.find();
    res.status(200).send(notes);
  } catch (error) {}
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
  try {
    const user = await NotesModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("notes updated success");
  } catch (error) {
    console.log(error);
  }
});

notesrouter.delete("/deletenotes/:id", async (req, res) => {
  try {
    const user = await NotesModel.findByIdAndDelete(req.params.id);
    res.send("notes deleted success");
  } catch (error) {
    console.log(error);
  }
});
module.exports = {
  notesrouter,
};
