const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const HomeRouter = require("./routes/HomeRoute");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", HomeRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
