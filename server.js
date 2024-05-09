const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Serve the React app from the build folder
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Handle requests to any other route by serving the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
