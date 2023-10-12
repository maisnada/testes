describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('http://localhost:4200/#/home') 
    cy.contains('a', 'Register now').click();   
    cy.get('[data-test="email"]').type('maisnada2@gmail.com');
    cy.get('[data-test="fullName"]').type('Marcelo Palmito');
    cy.get('[data-test="registerUserName"]').type('maisnada2');
    cy.get('[data-test="registerPassword"]').type('maisnada123');
    cy.contains('button', 'Register').click();
  })
})