const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  downloadUrl: { type: String, required: true },
  thumbnailUrl: { type: String },
  version: { type: String, default: '1.0.0' },
  downloadsCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Tool', toolSchema);
