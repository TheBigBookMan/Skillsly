const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// * Middleware
app.use(cors());
app.use(express.json());

// ! Test
app.get("/", (req, res) => {
    res.send({ message: "Auth service running" });
});

// * Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Auth server running on port ${PORT}`));
