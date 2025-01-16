const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

const connection1 = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

module.exports = connection1;