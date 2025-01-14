const mongoose = require('mongoose');

const URI = process.env.MONGO_DB;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;