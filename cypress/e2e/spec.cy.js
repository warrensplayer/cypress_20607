/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('http://localhost:8080')
    cy.get('#gotoh2').click();
  })
})
