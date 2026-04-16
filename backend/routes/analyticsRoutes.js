const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');
const authMiddleware = require('../middleware/authMiddleware');

// Track events (no auth required)
router.post('/track', analyticsController.trackEvent);

// Get dashboard stats (admin only)
router.get('/dashboard', authMiddleware, analyticsController.getDashboardStats);

// Get realtime events (admin only)
router.get('/realtime', authMiddleware, analyticsController.getRealtimeEvents);

module.exports = router;
