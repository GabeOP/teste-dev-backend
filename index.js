const express = require("express");
const app = express();

const Controller = require("./controllers/client.controller");
app.post("/", Controller.post)

const connectDb = require("./database/db");
connectDb();

const PORT = 3000
app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}/`))