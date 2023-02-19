const express = require("express");
const { connection } = require("./db");
const { authenticate } = require("./middelware/authenticate");
const { notesrouter } = require("./Routes/Notes.route");
const { router } = require("./Routes/User.route");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", router);
app.use(authenticate);
app.use("/notes", notesrouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port");
});
