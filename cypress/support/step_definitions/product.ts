import { When } from 'cypress-cucumber-preprocessor/steps';

When('go to {string} product page', (productId: string) => {
  cy.visit(`things/${productId}`);
});
