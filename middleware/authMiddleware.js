const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    console.log("Extracted token:", token);

    try {
        const decoded = jwt.verify(token, 'my_secret');
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Token verification error:", error.message);
        return res.status(400).json({ message: "Invalid token." });
    }
};

module.exports = authMiddleware;
