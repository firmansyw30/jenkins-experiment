// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js backend!' });
});

// Export app for testing
module.exports = app;

// Start server only if this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// trigger ci cd (8)