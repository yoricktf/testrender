const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello, World!</h1>
        <p>This is a simple Node.js Express app running in Docker.</p>
        <p>Visit <a href="/health">/health</a> for a health check.</p>
    `);
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
