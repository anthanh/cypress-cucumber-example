/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable<Subject> {
    getByTestId(text: string): Chainable<JQuery<HTMLElement>>;
    clickByText(text: string, options?: any): Chainable<JQuery<HTMLElement>>;
    typeByName(
      fieldName: string,
      value: string,
      options?: any
    ): Chainable<JQuery<HTMLElement>>;
    shouldBeVisible(text: string): Chainable<JQuery<HTMLElement>>;
    windowPropertyExists(text: string): Chainable<any>;
    invokeWindowMethod(text: string): Chainable<any>;
  }
}
