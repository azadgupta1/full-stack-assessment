const express = require('express');
const session = require('express-session');
// const passport = require('passport'); // Commented out because its not working 
const bcrypt = require('bcrypt');
const db = require('./db');
// require('../authentication/passport-config'); // Commenting out

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Middleware for parsign JSON bodies
app.use(express.json());

// Middleware for sessions
app.use(session({
    secret: 'your_secret_key', // Change this to a secure random key
    resave: false,
    saveUninitialized: false,
}));


// app.use(passport.initialize()); // Commenting out Passport initialization
// app.use(passport.session()); // Commenting out Passport session management

// endpoint of root
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Node.js Server!" });
});

// Authentication routes
// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login',
//     failureFlash: true
// }));
// commented out because could not resolve the problem

app.post('/register', async (req, res) => {
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

// Dashboard route
// app.get('/dashboard', (req, res) => {
//     if (req.isAuthenticated()) {
//         res.json({ message: "Welcome to your dashboard!" });
//     } else {
//         res.redirect('/login');
//     }
// });

app.get('/logout', (req, res) => {
    // req.logout((err) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).json({ error: "Logout error" });
    //     } else {
    //         res.redirect('/');
    //     }
    // });
    res.json({ message: "Logout endpoint is currently disabled" }); 
});



// User CRUD routes here given

app.post('/users', async (req, res) => {
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

app.get('/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await db.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + ".");
});
