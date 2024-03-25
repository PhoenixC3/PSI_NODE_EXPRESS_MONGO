const Hero = require('../models/Hero');

exports.getHeroes = async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getHeroById = async (req, res) => {
  try {
    const hero = await Hero.findOne({ id: req.params.id });

    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }

    res.json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createHero = async (req, res) => {
  const { name, id } = req.body;
  const existingHero = await Hero.findOne({ id });

  if (existingHero) {
    return res.status(400).json({ message: 'Hero with this ID already exists' });
  }

  const hero = new Hero({
    name : name,
    id : id,
  });

  try {
    const newHero = await hero.save();
    res.status(201).json(newHero);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteHero = async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await Hero.findOne({ id });
    if (!hero) {
      return res.status(404).json({ message: 'Hero not found' });
    }

    await Hero.deleteOne({ id });
    res.json({ message: 'Hero deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
