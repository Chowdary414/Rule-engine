import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [ruleString, setRuleString] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/rules/create', { rule_string: ruleString });
      setResponse(res.data);
    } catch (error) {
      console.error('Error creating rule:', error);
    }
  };

  return (
    <div className="App">
      <h1>Rule Engine</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Rule:</label>
        <input
          type="text"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
        />
        <button type="submit">Create Rule</button>
      </form>

      {response && (
        <div>
          <h2>AST:</h2>
          <pre>{JSON.stringify(response.ast, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;