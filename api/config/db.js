const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('Chargement de MONGO_URI...');
  console.log('MONGO_URI:', process.env.MONGO_URI || 'Variable non définie');
  try {
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log('Connexion à MongoDB réussie');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB', err.message);
    process.exit(1); // Arrête l'application si la connexion échoue
  }
};

module.exports = connectDB;
