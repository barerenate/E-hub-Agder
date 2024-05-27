describe('HTTP', () => {
    
    it('GET all', () => {
        cy.request('GET', "https://localhost:7237/api/Application/GetApplications")
        .its("status")
        .should('equal', 200)
    })

    it('GET by id', () => {
      cy.request('GET', "https://localhost:7237/api/Application/GetApplication?id=8")
      .its("status")
      .should('equal', 200)
    })

    it('POST', () => {
        cy.request({
            method: "POST",
            url: "https://localhost:7237/api/Application/PostApplication",
            body: {
                company: "cypress test",
                website_url: "cypress.io",
                revenue: 1000000,
                name: "Test",
                phone: 909090,
                email: "cypress@email.com",
                hub: "test",
                comp_desc: "cypress test",
                goals: "cypress test",
                needs: "cypress test"
            }
        })
        .its("status")
        .should('equal', 204)
      })

      it('PUT', () => {
        cy.request({
            method: "PUT",
            url: "https://localhost:7237/api/Application/PutApplication?id=13",
            body: {
                company: "cypress test update",
                website_url: "cypress.io",
                revenue: 1000000,
                name: "Test",
                phone: 909090,
                email: "cypress@email.com",
                hub: "test",
                comp_desc: "cypress test update",
                goals: "cypress test update",
                needs: "cypress test update"
            }
        })
        .its("status")
        .should('equal', 204)
      })

      it('DELETE', () => {
        cy.request({
            method: "DELETE",
            url: "https://localhost:7237/api/Application/DeleteApplication?id=11",
        })
        .its("status")
        .should('equal', 204)
      })

  })