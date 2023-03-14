const express = require("express");
const app = express();

app.use(express.json());

const UserRoute = require("./routes/user.router")
app.use("/", UserRoute)

const connectDb = require("./database/db");
connectDb();

const PORT = 3000
app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}/`))