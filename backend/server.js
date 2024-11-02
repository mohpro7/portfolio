const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('./middlewares/rateLimiter');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Connexion à MongoDB
connectDB();

// Middlewares globaux
app.use(helmet()); // Mesures de sécurité supplémentaires
app.use(cors()); // Autoriser les requêtes Cross-Origin
app.use(express.json()); // Pour gérer les requêtes JSON
app.use(rateLimit); // Appliquer la limitation de taux à toutes les routes

// Importer les routes de contact
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur interne du serveur' });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});