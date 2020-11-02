import { getHeader } from '../support/app.po';

describe('initiative-management', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the Company Header', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getHeader().contains('Initiative Manager');
  });
});
