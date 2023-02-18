const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema(
  {
    titel: String,
    desc: String,
    userID: String,
  },
  {
    versionKey: false,
  }
);

const NotesModel = mongoose.model("note", NotesSchema);

module.exports = {
  NotesModel,
};
