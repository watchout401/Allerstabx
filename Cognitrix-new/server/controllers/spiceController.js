const Spice = require('../models/Spice');

const getSpices = async (req, res) => {
  try {
    const spices = await Spice.find();
    res.json(spices);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getSpiceById = async (req, res) => {
  try {
    const spice = await Spice.findById(req.params.id);
    if (!spice) return res.status(404).json({ message: 'Spice not found' });
    res.json(spice);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getSpices, getSpiceById };