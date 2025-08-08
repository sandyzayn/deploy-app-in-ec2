// app.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`🍦 Ice Cream Shop running at http://localhost:${port}`);
});
