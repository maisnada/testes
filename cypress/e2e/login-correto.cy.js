describe('Pagina de login', () => {

  //todos os passos precisaram da execução desse comando//
  beforeEach(() => {

    cy.visit('http://localhost:4200/#/home')

  }) 

    it('Preenche os campos lo login corretamente para realizar login', () => {
      /*
      execução anterior
      cy.visit('http://localhost:4200/#/home') 
      cy.get('[data-test="loginUserName"]').type('flavio');
      cy.get('[data-test="loginPassword"]').type('123');
      cy.contains('button', 'login').click(); */ 

      //comando customizado em support/commands
      cy.login('flavio','123');
    })
  })


