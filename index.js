const express = require("express");
const { connection } = require("./db");
const { router } = require("./Routes/User.route");

const app = express();
app.use(express.json());
app.use("/users", router);

app.listen(8080, async () => {
  try {
    await connection;

    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
  console.log("listening on port");
});
