import { When } from 'cypress-cucumber-preprocessor/steps';

When('go to home page', () => {
  cy.visit('/')
});

When('close subscribe popup', () => {
  cy.get('.popup.join_subscribe .ly-close').click();
});
