const express = require("express");
const app = express();

app.use(express.json());

const Controller = require("./controllers/client.controller");
app.get("/", Controller.get)
app.get("/:email", Controller.getByEmail)
app.post("/", Controller.post)
app.patch("/:_id", Controller.patch)

const connectDb = require("./database/db");
connectDb();

const PORT = 3000
app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}/`))