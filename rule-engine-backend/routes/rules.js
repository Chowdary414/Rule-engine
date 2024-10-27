const express = require('express');
const router = express.Router();
const Rule = require('../models/Rule');
const createRuleAST = require('../utils/ruleEngine'); // Import your rule engine logic here

// POST: Create a new rule
router.post('/create', async (req, res) => {
  const { rule_string } = req.body;
  
  try {
    const rule = new Rule({ rule_string });
    await rule.save();
    const ast = createRuleAST(rule_string);
    res.json({ success: true, ast });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Add more endpoints as needed...

module.exports = router;