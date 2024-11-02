const rateLimit = require('express-rate-limit');

// Définition d'un limiteur de requêtes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite chaque IP à 100 requêtes par fenêtre
  standardHeaders: true, // Retourne l'info des limites dans les en-têtes "RateLimit-*"
  legacyHeaders: false, // Désactive les anciens en-têtes "X-RateLimit-*"
});

module.exports = limiter;
