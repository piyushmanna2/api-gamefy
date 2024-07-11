const express = require('express');
const router = express.Router();
const { getGames , getGamesByCategory } = require('../controller/games-controller');

router.get('/games', getGames);
router.get('/categories/:id/games', getGamesByCategory);

module.exports = router;