const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.get('/pets', petController.getPets);
router.get('/pet/:id', petController.getPetById);

module.exports = router;
