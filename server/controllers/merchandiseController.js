const Merchandise = require('../models/Merchandise');

// Placeholder functions for merchandise operations

exports.getAllMerchandise = async (req, res) => {
  try {
    const merchandise = await Merchandise.find();
    res.json(merchandise);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching merchandise', error: error.message });
  }
};

exports.getMerchandiseById = async (req, res) => {
  try {
    const item = await Merchandise.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Merchandise not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching merchandise item', error: error.message });
  }
};

exports.createMerchandise = async (req, res) => {
  // TODO: Add admin authentication here
  try {
    const newItem = new Merchandise(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error creating merchandise item', error: error.message });
  }
};

// Keeping update and delete as placeholders for now
exports.updateMerchandise = (req, res) => {
  res.json({ message: `Update merchandise with ID ${req.params.id} placeholder` });
};

exports.deleteMerchandise = (req, res) => {
  res.json({ message: `Delete merchandise with ID ${req.params.id} placeholder` });
};
