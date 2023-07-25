import './commands'
import './common/common_steps';

// Example of a custom Cypress command
Cypress.Commands.add('login', (username, password) => {
  // Implement login functionality here
});

require('cypress-xpath');