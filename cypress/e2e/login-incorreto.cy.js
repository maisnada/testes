describe('Pagina de login', () => {

    beforeEach(() => {

      cy.visit('http://localhost:4200/#/home')

      cy.intercept('POST', 'http://localhost:3000/user/login', {
        statusCode: 401
      }).as('stubPost')//dublê de post que irá implementar o erro 400

      //https://www.alura.com.br/artigos/testes-com-mocks-e-stubs
      //https://docs.cypress.io/api/commands/intercept#__docusaurus_skipToContent_fallback
    }) 

    it('Verifica mensagem de campos obrigatorios', () => {
      //cy.visit('http://localhost:4200/#/home') 
      cy.contains('User name is required!').should('be.visible');      
      cy.contains('Password is required!').should('be.visible');    
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
      cy.login('flavio','123');
      cy.wait('@stubPost');   
    })

  })


  