import {Formatter} from 'cucumber-json-report-formatter';

const formatter = new Formatter()
const sourceFile = "cypress/reports/cucumber-report.json"
const outputFile = "cypress/reports/cucumber-htmlreport.html"
await formatter.parseCucumberJson(sourceFile, outputFile)