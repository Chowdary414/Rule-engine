const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema({
  rule_string: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rule', ruleSchema);