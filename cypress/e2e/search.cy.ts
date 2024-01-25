describe('search', () => {
  it('search w/ hits', () => {
    cy.visit('/')
    // 検索
    cy.get('#q').type('fuga')
    cy.get('#search').click()
    // url検査
    cy.url().should('include', '/search?q=fuga')
    // 検索結果検査
    cy.get('#main > ul > li').should('have.length', 1)
  })
  it('search w/ no hits', () => {
    cy.visit('/')
    // 検索
    cy.get('#q').type('xxx')
    cy.get('#search').click()
    // url検査
    cy.url().should('include', '/search?q=xxx')
    // 検索結果検査
    cy.get('#main > ul > li').should('have.length', 0)
  })
})
