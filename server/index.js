const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// Get the process.env port or just run on 5000
let port = process.env.PORT || 5000;

// Add middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

// Load and use all routes
fs.readdir('./routes', (err, routes) => {
    if (err) throw err;

    routes.forEach(file_name => {
        const router = require('./routes/' + file_name);
        const route = file_name.split('_')[0];

        app.use('/' + route, router);
    })
})

// Start the server!
app.listen(port, () => {
    console.log("Express app started on port ", port);
});