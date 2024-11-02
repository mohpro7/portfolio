const express = require('express');
const Contact = require('../models/Contact');
const validateContact = require('../middlewares/validateContact');
const router = express.Router();

// Route pour enregistrer un contact
router.post('/', validateContact, async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Contact enregistré avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement du contact' });
  }
});

module.exports = router;
