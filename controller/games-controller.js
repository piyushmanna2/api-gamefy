const gamesModel = require('../model/Games');

const getGames = async (req, res) => {
    try {
        const games = await gamesModel.find({ game_status: 1, game_featured: 1 });
        if (games.length === 0) {
            return res.status(404).json({ status: false, data: [], message: 'No Games found.' });
        }
        res.json({ status: true, data: games });
    } catch (err) {
        res.status(500).json({ status: false, error: err.message });
    }
}

const getGamesByCategory = async (req, res) => {
    try {
        const games = await gamesModel.find({ game_status: 1, game_catid: req.params.id });
        if (games.length === 0) {
          return res.status(404).json({ status: false, data: [], message: 'No Games found.' });
        }
        res.json({ status: true, data: games });
      } catch (err) {
        res.status(500).json({ status: false, error: err.message });
      }
}

module.exports = { getGames , getGamesByCategory }