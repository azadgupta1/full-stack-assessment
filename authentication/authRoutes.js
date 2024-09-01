const express = require('express');
const passport = require('passport');
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: "Logged in successfully" });
});

// Logout route
router.post('/logout', (req, res) => {
    req.logout();
    res.json({ message: "Logged out successfully" });
});

module.exports = router;
