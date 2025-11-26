# the-internet-herokuapp-tests
This repository contain the internet.herokuapp test cases

# Installation
1. Make sure you have installed followings
 - Node.js
 - npm

Check installed version
node -v
npm -v

2. Install project dependancies
npm install
npm install cypress --save-dev     

3. Install the mochasome for report generate
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

4. Execute Test headless mode
npm run test:report

Headless mode will :
- Execute all test via terminal
- Generate screenshots on failures. Check cypress/screenshots
- Generate mocha report. Check cypress/reports

# Project structure
cypress/
  e2e/               # All test specifications
  constant/          # Contains page constants (selectors, URLs, etc.)
  page-objects/      # Page Object Model classes
  fixtures/          # Test data files (optional)
  support/           # Custom commands & utilities
  
cypress.config.js    # Cypress configuration
package.json         # Dependencies & scripts


