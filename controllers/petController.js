const Pet = require('../models/Pet');

exports.getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findOne({ id: req.params.id });

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    
    res.json(pet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
