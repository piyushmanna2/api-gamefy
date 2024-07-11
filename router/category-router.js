const express = require('express');
const router = express.Router();
const { getCategory } = require('../controller/category-controller');

router.get('/category', getCategory);

module.exports = router;