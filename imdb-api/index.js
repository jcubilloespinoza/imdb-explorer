// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./db');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/topmovies', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT tbasics.primaryTitle, tbasics.startYear, tratings.averagerating
            FROM title_basics AS tbasics 
            JOIN title_ratings AS tratings
            ON tbasics.tconst = tratings.tconst
            WHERE tbasics.titleType = 'movie' AND tbasics.isAdult = 0 AND tratings.numvotes >= 100000
            ORDER BY averagerating DESC, numvotes DESC
            LIMIT 10
            `);
    res.json(result.rows);
    } catch (err) {
        console.error('Error querying DB:', err);
        res.status(500).send('Database query failed');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
