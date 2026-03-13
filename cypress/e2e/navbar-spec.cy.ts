describe('Test Navigation on home page', () => {
  const blackNavbar = 'div[data-id="5782ee7"]'
  const whiteNavbar = 'div[data-id="14db3ff"]'
  const findOutMoreButton = 'div[data-id="d7f588c"]'
  
  const navbarCanvas = 'div[id="offcanvas-14db3ff"]'

  it('should show only 1 navbar on medium resolution', () => {
    cy.viewport('ipad-2')
    cy.visit('https://www.weareopenr.com')
    cy.get(whiteNavbar).should('be.visible')
    cy.get(blackNavbar).should('not.be.visible')
  })

  it('should show only 1 navbar on 1000x660 resolution', () => {
    cy.viewport(1000, 660)
    cy.visit('https://www.weareopenr.com')
    cy.get(whiteNavbar).should('be.visible')
    cy.get(blackNavbar).should('not.be.visible')
  })

  it('should show the find out more button on 1280x800 resolution', () => {
    cy.viewport(1280, 800)
    cy.visit('https://www.weareopenr.com')
    cy.get(whiteNavbar).should('not.be.visible')
    cy.get(blackNavbar).should('not.be.visible')
    cy.get(findOutMoreButton).should('be.visible')
  })

  it('should show the navbar canvas when clicked on 1000x660 resolution', () => {
    cy.viewport(1000, 660)
    cy.visit('https://www.weareopenr.com')
    cy.get(whiteNavbar).click()
    cy.get(navbarCanvas).should('be.visible')
  })
})