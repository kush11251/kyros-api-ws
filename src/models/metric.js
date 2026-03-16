const mongoose = require('mongoose');
const metricSchema = new mongoose.Schema({
    name: String,
    value: Number
});
module.exports = mongoose.model('Metric', metricSchema);