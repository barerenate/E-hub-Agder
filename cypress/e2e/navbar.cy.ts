
describe('Navbar and menu', () => {
    
    it('displays navbar', () => {
        cy.visit('http://localhost:5173/')
    
        cy.get('[data-testid="navbar"]').should('exist')
        .should('be.visible');
    })

    context('desktop resolution', () => {
        beforeEach(() => {
          cy.viewport("macbook-16")
        })

        it('displays dropdown hover element text correctly', () => {
            cy.visit('http://localhost:5173/')
        
            cy.get('[data-testid="navbar"]').should('include.text', "E-hubs");
        })
      
        it('navigates to homepage', () => {
            cy.visit('http://localhost:5173/')
          
            cy.get('[data-testid="nav-link-home"]').click()
          
            cy.url().should('include', "/")
        })
      
        it('navigates to aboutpage', () => {
            cy.visit('http://localhost:5173/')
          
            cy.get('[data-testid="nav-link-about"]').click()
          
            cy.url().should('include', "/about")
        })
          
        
        it('renders all dropdown items', () => {
            cy.visit('http://localhost:5173/')
        
            cy.get('[data-testid="nav-dropdown"]').trigger('mouseover')
        
            cy.get('[data-testid="dropdown-display"]').should('be.visible')
        
            cy.get('[data-testid="dropdown-items0"]').should('exist')
            cy.get('[data-testid="dropdown-items1"]').should('exist')
            cy.get('[data-testid="dropdown-items2"]').should('exist')
        })
    })

    context('mobile resolution', () => {
        beforeEach(() => {
          cy.viewport("iphone-8")
        })

        it('displays mobile menu icon', () => {
            cy.visit('http://localhost:5173/')
        
            cy.get('[data-testid="nav-menu-icon"]').should('be.visible');
        })

        it('displays mobile menu when icon is clicked', () => {
            cy.visit('http://localhost:5173/')
        
            cy.get('[data-testid="nav-menu-icon"]').click();

            cy.get('[data-testid="nav-menu"]').should('have.class', "active");
        })

        it('does not display desktop dropdown menu in mobile view ', () => {
            cy.visit('http://localhost:5173/')
        
            cy.get('[data-testid="nav-dropdown"]').should('not.be.visible')
        })

    })
  })