import * as functions from './common';

export * from './common';

// auto register function as cy commands
Object.keys(functions).forEach((fn) => {
  Cypress.Commands.add(fn, (functions as any)[fn]);
});
