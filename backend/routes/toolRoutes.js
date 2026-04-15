const express = require('express');
const router = express.Router();
const toolController = require('../controllers/toolController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', toolController.getAllTools);
router.get('/:id', toolController.getToolById);
router.post('/', authMiddleware, toolController.createTool);

module.exports = router;
