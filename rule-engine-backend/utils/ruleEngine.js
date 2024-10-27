class Node {
    constructor(type, value = null, left = null, right = null) {
      this.type = type; // 'operator' or 'operand'
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function createRuleAST(ruleString) {
    // Simplified parsing of ruleString to AST
    // Example logic to convert ruleString into an AST structure
    return new Node('operator', 'AND', new Node('operand', 'age > 30'), new Node('operand', "department = 'Sales'"));
  }
  
  module.exports = createRuleAST;