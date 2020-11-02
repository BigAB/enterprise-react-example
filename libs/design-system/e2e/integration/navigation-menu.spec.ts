describe('design-system: Navigation Menu component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=navigationmenu--primary'));

  it('should render the component', () => {
    cy.get('button').should('be.visible');
  });
});
