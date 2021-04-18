describe('app', () => {
  it('can click button', () => {
    cy.visit('/');
    cy.get('button').contains('increment').click();

    cy.get('p').contains('1');
  });
});
