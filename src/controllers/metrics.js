const express = require('express');
const router = express.Router();
const metricModel = require('../models/metric');
router.get('/', async (req, res) => {
    const metrics = await metricModel.find();
    res.json(metrics);
});
module.exports = router;