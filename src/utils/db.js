const mongoose = require('mongoose');
async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/kyros-api');
}
module.exports = connectDb;