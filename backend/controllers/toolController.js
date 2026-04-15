const Tool = require('../models/Tool');

exports.getAllTools = async (req, res) => {
  try {
    const tools = await Tool.find();
    res.json(tools);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getToolById = async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.id);
    if (!tool) return res.status(404).json({ message: 'Tool not found' });
    res.json(tool);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createTool = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    const newTool = new Tool(req.body);
    const tool = await newTool.save();
    res.json(tool);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
