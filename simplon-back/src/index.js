const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// Router
const HomeRouter = require("./routes/HomeRoute");
const projectRouter = require("./routes/projectRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URI);
  console.log("Database connection established");
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", HomeRouter);
app.use("/projects", projectRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
