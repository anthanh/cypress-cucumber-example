export function clickByText(text: string, options?: any) {
  return cy.get('a, button, p, span').contains(text).click(options);
}

export function getByTestId(datahook: string) {
  return cy.get(`[data-testid="${datahook}"]`);
}

export function typeByName(fieldName: string, text: string, options?: any) {
  return cy
    .get(`input[name*="${fieldName}"], textarea[name*="${fieldName}"]`)
    .type(text, options);
}

export function shouldBeVisible(selector: string) {
  return cy.get(selector).should('be.visible');
}

export function windowPropertyExists(name: string) {
  return cy.window({ timeout: 10000 }).should('have.property', name);
}

export function invokeWindowMethod(name: string) {
  return cy.window().invoke(name);
}
