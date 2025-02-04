const express = require('express');
const { getSpices, getSpiceById } = require('../controllers/spiceController');

const router = express.Router();

router.get('/', getSpices);
router.get('/:id', getSpiceById);

module.exports = router;