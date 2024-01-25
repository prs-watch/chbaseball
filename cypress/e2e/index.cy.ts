describe('index', () => {
  it('init view', () => {
    cy.visit('/')
    // ヘッダのパンくず検査
    cy.get('#header').contains('TOP').should('have.length', 0)
    // タイトル検査
    cy.get('#main > .text-3xl').should('have.text', 'hogera')
    // 本文検査
    cy.get('#main > div > p').should('have.text', 'ほげら')
    // サイドバー検査
    cy.get('#menu > ul > li').should('have.length', 2)
  })
})
