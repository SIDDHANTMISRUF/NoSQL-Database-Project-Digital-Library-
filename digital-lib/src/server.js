const express = require('express');
require('dotenv').config();
const { connectToDatabase } = require('./services/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/media', require('./routes/media'));

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Digital Library API is running!' });
});

// Start server
async function startServer() {
    await connectToDatabase();
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

startServer();