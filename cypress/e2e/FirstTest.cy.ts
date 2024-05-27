describe('first test', () => {
  
  it(' correct title on screen', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="home-title"]').should('exist')
    .should('have.text', "Velkommen til E-hubs Agder");
  })
})