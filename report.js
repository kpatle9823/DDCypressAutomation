const report = require('mochawesome-report-generator');
const merge = require('mochawesome-merge');
const fs = require('fs');

(async function generateReport() {
  const jsonReportDir = 'cypress/reports/json';  // Directory containing JSON reports
  const jsonFiles = fs.readdirSync(jsonReportDir).map(file => `${jsonReportDir}/${file}`);

  const options = {
    reportDir: 'cypress/reports/mochawesome',
    reportTitle: 'Cypress-Cucumber Test Report',
    reportFilename: 'custom-report.html',
    reportJsonFile: 'mochawesome.json',
    inline: true,
    autoOpen: true
  };

  const jsonReport = await merge(jsonFiles);
  report.create(jsonReport, options);
})();
