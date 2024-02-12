const express = require('express');
const router = express.Router();
const testController = require('../controllers/test-controller');

router.get('/get-api/:testData' , testController.testGet);
module.exports = router;