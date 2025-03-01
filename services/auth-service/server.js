const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const admin = require("./firebase-config");
const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();

// * Middleware
app.use(cors());
app.use(express.json());

// * Verify firebase token from auth head
const verifyFirebaseToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorised: No token provided" });
    }

    const firebaseToken = authHeader.split(" ")[1];

    try {

        const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
        req.user = decodedToken;
        next();

    } catch(err) {
        res.status(401).json({ error: "Unauthorised: Invalid Firebase Token" });
    }
}

// * Verify JWT token from auth header
const verifyJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unathorised: No JWT Token" });
    }

    const token = authHeader.split(" ")[1];

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch(err) {
        res.status(401).json({ error: "Unauthorised: Invalid JWT" });
    }
}

// * Login
app.post("/auth/login", verifyFirebaseToken, (req, res) => {
    const user = req.user;

    const jwtToken = jwt.sign(
        { uid: user.uid, email: user.email, role: user.role || "user" },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ jwtToken });
});

// * Protected route
app.get("/protected", verifyJwt, (req, res) => {
    res.json({ message: "You are authenticated with JWT.", user: req.user });
})

// * Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Auth server running on port ${PORT}`));
