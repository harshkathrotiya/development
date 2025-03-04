const express = require('express');
const app = express();

// Middleware to validate user credentials
function userMiddleware(req, res, next) {
    const username = req.headers['username'];
    const password = req.headers['password'];

    // Check if username and password are correct
    if (username !== "harsh" || password !== "pass") {
        return res.status(403).json({
            msg: "Incorrect inputs"
        });
    }
    next(); // If credentials are correct, proceed to the next middleware
}

// Middleware to validate kidney ID
function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyid); // Access query parameters

    // Check if kidneyId is either 1 or 2
    if (kidneyId !== 1 && kidneyId !== 2) {
        return res.status(403).json({
            msg: "Incorrect kidney ID"
        });
    }
    next(); // If kidneyId is valid, proceed to the next middleware
}

// Health checkup route with both user and kidney validation
app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    // Do something with kidney here, since validation passed
    res.send("Your kidney is healthy");
});

// Kidney check route with both user and kidney validation
app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
    // Do something with kidney here, since validation passed
    res.send("Your kidney is healthy");
});

// Heart check route with user validation only
app.get("/heart-check", userMiddleware, (req, res) => {
    // Do something with user here, since user validation passed
    res.send("Your heart is healthy");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
