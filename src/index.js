import express from "express"
import dotenv from "dotenv"

const app = express();

dotenv.config()

const port = process.env.PORT || 4000;

// Routing path.
app.get("/", (req, res) => {
  res.send("<h2>Hello React App<h2>");
});

// start the server.
app.listen(port, () => {
  console.log(`Server is listining on http://localhost:${port}`);
});
