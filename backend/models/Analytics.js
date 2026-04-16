const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  eventType: {
    type: String,
    enum: ['page_visit', 'tool_download', 'service_request', 'user_signup', 'user_login'],
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  toolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tool',
    default: null
  },
  serviceRequestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceRequest',
    default: null
  },
  pagePath: {
    type: String,
    default: null
  },
  userAgent: String,
  ipAddress: String,
  timestamp: {
    type: Date,
    default: Date.now,
    index: true
  }
});

module.exports = mongoose.model('Analytics', analyticsSchema);
