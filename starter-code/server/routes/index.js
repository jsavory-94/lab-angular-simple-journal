const express = require('express');
const journalRoutes = require('./api/journal-entries');
const router = express.Router();

router.get('/api', journalRoutes);

module.exports = router;
