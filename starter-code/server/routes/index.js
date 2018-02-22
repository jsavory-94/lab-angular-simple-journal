const express = require('express');
const journalRoutes = require('./api/journal-entries');
const router = express.Router();

// router.use('/api', journalRoutes);

router.get('/api', (req, res, next) => {
  // throw new Error('!!!');
  res.json({ welcome: 'restaurant API' });
});

module.exports = router;
