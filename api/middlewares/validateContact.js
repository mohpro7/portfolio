const Joi = require('joi');

// Schéma de validation des données de contact avec Joi
const contactSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(5).max(500).required(),
});

// Fonction de validation
const validateContact = (req) => {
  const { error } = contactSchemaValidation.validate(req.body);
  if (error) {
    return error.details[0].message; // Retourne le message d'erreur si la validation échoue
  }
  return null; // Retourne null si tout est valide
};

module.exports = validateContact;
