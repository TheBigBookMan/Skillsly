const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const admin = require("firebase-admin");

dotenv.config();

const app = express();

// * Middleware
app.use(cors());
app.use(express.json());

// ! Test
app.get("/", (req, res) => {
    res.send({ message: "Auth service running" });
});

const verifyToken = async (req, res, next) => {
    console.log(req.headers);
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({ error: "Unauthorised" });
    }

    try {

        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();

    } catch(err) {
        res.status(401).json({ error: "Invalid token" });
    }
}

// * Protected route
app.get("/protected", verifyToken, (req, res) => {
    res.json({ message: "You are authenticated.", user: req.user });
})

// * Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Auth server running on port ${PORT}`));
