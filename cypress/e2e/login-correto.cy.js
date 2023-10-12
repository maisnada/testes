describe('Pagina de login', () => {
    it('Preenche os campos lo login corretamente para realizar login', () => {
      cy.visit('http://localhost:4200/#/home') 
      cy.get('[data-test="loginUserName"]').type('flavio');
      cy.get('[data-test="loginPassword"]').type('123');
      cy.contains('button', 'login').click();  
    })
  })


  