const express = require('express');
const connectDB = require('./config/db');
const Contact = require('./models/Contact');
const validateContact = require('./middlewares/validateContact');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();

// Middleware pour traiter les JSON
app.use(express.json());

connectDB(); // Connecter à MongoDB

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Validation des données
      const validationError = validateContact(req);
      if (validationError) {
        return res.status(400).json({ error: validationError });
      }

      router.post('/', rateLimiter, validateContact, async (req, res) => {
        try {
          const newContact = new Contact(req.body);
          await newContact.save();
          res.status(201).json({ message: 'Contact enregistré avec succès' });
        } catch (error) {
          console.error('Erreur lors de l\'enregistrement du contact :', error);
          res.status(500).json({ error: 'Erreur lors de l\'enregistrement du contact' });
        }
      });

      // Enregistrement dans la base de données
      const { name, email, message } = req.body;
      const newContact = new Contact({ name, email, message });
      await newContact.save();

      res.status(201).json({ message: 'Contact enregistré avec succès.' });
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement du contact :', error);
      res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
  } else {
    res.status(405).json({ error: 'Méthode non autorisée.' }); // Pour les méthodes non autorisées
  }
};
