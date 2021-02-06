/// <reference path="../../index.d.ts" />

import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('clicks {string}', (testId: string) => {
  cy.getByTestId(testId).click();
});

When('force clicks {string}', (testId: string) => {
  cy.getByTestId(testId).click({ force: true });
});

When('clicks {string} selector', (selector: string) => {
  cy.get(selector).click();
});

When('clicks {string} text', (text: string) => {
  // TODO: remove this force issue with fixed layout
  cy.contains(text).click({ force: true });
});

Then('{string} is present', (testId: string) => {
  cy.getByTestId(testId).should('be.visible');
});

Then('selector {string} is present', (selector: string) => {
  cy.get(selector).should('be.visible');
});

Then('{string} contains {string} text', (testId: string, text: string) => {
  cy.getByTestId(testId).contains(text).should('be.visible');
});

Then(
  'selector {string} contains {string} text',
  (selector: string, text: string) => {
    cy.get(selector).contains(text).should('be.visible');
  }
);

Then('text {string} is present', (text: string) => {
  cy.contains(text).should('be.visible');
});

Then(
  'fill {string} field-name with {string} value',
  (fieldName: string, value: string) => {
    cy.typeByName(fieldName, value);
  }
);
