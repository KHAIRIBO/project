const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, serviceController.createRequest);
router.get('/my-requests', authMiddleware, serviceController.getUserRequests);

module.exports = router;
