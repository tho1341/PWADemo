const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public')); // Serve files from 'public' directory

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
