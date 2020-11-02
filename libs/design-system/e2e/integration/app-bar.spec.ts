/// <reference types="cypress" />
describe('design-system: AppBar component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appbar--primary'));

  it('should render the component', () => {
    cy.get('header').should('contain', 'Initiative Manager');
  });
});
