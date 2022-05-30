// Require Dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wizSpellSchema = new Schema({
  level: String,
  name: String,
  school: String,
  range: String,
  duration: String,
  aoe: String,
  components: String,
  casting: String,
  saving: String,
  description: String
})

module.exports = mongoose.model('WizSpell', wizSpellSchema);