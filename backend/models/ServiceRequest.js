const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceType: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in-progress', 'completed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
