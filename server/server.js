const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = 5000;
const postRoute = require('./routes/post.route');
const connection1 = require('./db/connection1');
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:5173']
}));
connection1();

app.use(express.json());

app.use('/api/v1/', postRoute);

app.get('/', (req, res) => {
    res.send({
        activeStatus: true,
        error: false,
    })
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/api/v1`);
});