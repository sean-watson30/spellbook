// Require Dependencies
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priSpellSchema = new Schema({
  level: String,
  name: String,
  sphere: String,
  range: String,
  duration: String,
  aoe: String,
  components: String,
  casting: String,
  saving: String,
  description: String
})

module.exports = mongoose.model('PriSpell', priSpellSchema);