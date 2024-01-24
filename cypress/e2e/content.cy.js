describe('content', () => {
  it('content view', () => {
    cy.visit('/vvq2bp7vyp')
    // ヘッダのパンくず検査
    cy.get('#header').contains('TOP').should('have.length', 1)
    // タイトル検査
    cy.get('#main > .text-3xl').should('have.text', 'fuga')
    // 本文検査
    cy.get('#main > div > p').should('have.text', 'ふが')
    // サイドバー検査
    cy.get('#menu > ul > li').should('have.length', 2)
  })
  it('404', () => {
    // status検査
    cy.request({ url: '/xxx', failOnStatusCode: false })
      .its('status')
      .should('equal', 404)
  })
})
