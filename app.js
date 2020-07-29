const express = require('express');
const app = express();

//"start": "npm run watch:all",

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
    })
}