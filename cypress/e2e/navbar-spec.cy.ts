describe('Test Navigation on home page', () => {
  const blackNavbar = 'div[data-id="5782ee7"]'
  const whiteNavbar = 'div[data-id="14db3ff"]'

  it('should show only 1 navbar on medium resolution', () => {
    cy.visit('https://www.weareopenr.com')
    cy.get(`div[${whiteNavbar}]`).should('be.visible')
    cy.get(`div[${blackNavbar}]`).should('not.be.visible')
  })
})