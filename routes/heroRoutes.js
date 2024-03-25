const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

router.get('/heroes', heroController.getHeroes);
router.get('/hero/:id', heroController.getHeroById);
router.post('/hero', heroController.createHero);
router.delete('/hero/:id', heroController.deleteHero);

module.exports = router;
