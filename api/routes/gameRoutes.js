const express = require('express');
const gameController = require('../controller/gameController');
const router = express.Router();

router.route('/').get(gameController.getAll);
router.route('/:count').get(gameController.getCounted);


module.exports = router;