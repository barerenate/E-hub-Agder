describe('default buttons navigation', () => {
  
//Navbar
    it('navigates to apply page', () => {
      cy.visit('http://localhost:5173/')
  
      cy.get('[data-testid="apply-button-navbar"]').click()
  
      cy.url().should('include', "/apply")
    })

//Footer
    it('navigates to apply page', () => {
      cy.visit('http://localhost:5173/')
  
      cy.get('[data-testid="apply-button-footer"]').click()
  
      cy.url().should('include', "/apply")
    })
  
    it('button navigates to login page', () => {
      cy.visit('http://localhost:5173/')
  
      cy.get('[data-testid="login-button-footer"]').click()
  
      cy.url().should('include', "/login")
    })

//Homepage
    it('button navigates to jdd page', () => {
      cy.visit('http://localhost:5173/')

      cy.get('[data-testid="jdd-button-table"]').click()

      cy.url().should('include', "/hubjdd")
    })

    it('button navigates to dignity page', () => {
      cy.visit('http://localhost:5173/')

      cy.get('[data-testid="dignity-button-table"]').click()

      cy.url().should('include', "/hubdignity")
    })

    it('button navigates to babybanden page', () => {
      cy.visit('http://localhost:5173/')

      cy.get('[data-testid="babybanden-button-table"]').click()

      cy.url().should('include', "/hubbabybanden")
    })

  })