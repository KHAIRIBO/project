const ServiceRequest = require('../models/ServiceRequest');

exports.createRequest = async (req, res) => {
  try {
    const { serviceType, description } = req.body;
    const newRequest = new ServiceRequest({
      user: req.user.id,
      serviceType,
      description
    });
    const request = await newRequest.save();
    res.json(request);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUserRequests = async (req, res) => {
  try {
    const requests = await ServiceRequest.find({ user: req.user.id });
    res.json(requests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
