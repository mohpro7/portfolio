const Joi = require('joi');

// Schéma de validation des données de contact avec Joi
const contactSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(5).max(500).required(),
});

const validateContact = (req, res, next) => {
  const { error } = contactSchemaValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateContact;
