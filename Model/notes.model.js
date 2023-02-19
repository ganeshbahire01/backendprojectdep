const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema(
  {
    titel: String,
    desc: String,
    userId: String,
  },
  {
    versionKey: false,
  }
);

const NotesModel = mongoose.model("note", NotesSchema);

module.exports = {
  NotesModel,
};
