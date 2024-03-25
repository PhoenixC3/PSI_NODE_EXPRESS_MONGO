const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const heroRoutes = require('./routes/heroRoutes');
const petRoutes = require('./routes/petRoutes');
const Hero = require('./models/Hero');
const Pet = require('./models/Pet');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tour_of_heroes', {
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(heroRoutes);
app.use(petRoutes);

app.get('/init', async (req, res) => {
  try {
    await Hero.deleteMany();
    await Pet.deleteMany();

    await Hero.create([
      { name: 'Homem-pato', id: 1 },
      { name: 'Pneu de carro', id: 2 },
      { name: 'Careca man', id: 3 },
      { name: 'Careca kid', id: 4 }
    ]);

    await Pet.create([
      { name: 'Chinelo', id: 1 },
      { name: 'Arroz de pato', id: 2 },
      { name: 'Geladeira eletrolux 5000', id: 3 }
    ]);

    res.json({ message: 'Database initialized' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

