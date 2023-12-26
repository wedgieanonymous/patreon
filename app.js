const express = require('express');
const mongoose = require('mongoose');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://127.0.0.1:27017/bookstore';

// async function connect() {
//     try {
//         await mongoose.connect(uri);
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error(error);
//     }
// }

// connect();

// Serve static files from the public folder


app.get('/', (req, res) => {
    console.log('Someone is joining.');
    let ipAddress = req.ip;

    if (req.headers['x-forwarded-for']) {
        ipAddress = req.headers['x-forwarded-for'].split(',')[0];
    }
    console.log(ipAddress);
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});