const el = require('./elements').ELEMENTS;

class Cadastro{

    acessarPaginaDeCadastro(){

        cy.visit('http://localhost:4200/#/home');
        cy.get(el.registerNow).click();  
    }

    preencherFormulario(usuario){

        cy.get(`input${el.email}`).type(usuario.email);
        cy.get(`input${el.fullName}`).type(usuario.fullName);
        cy.get(`input${el.registerUserName}`).type(usuario.userName);
        cy.get(`input${el.registerPassword}`).type(usuario.password);
    }

    submeterCadastro(){

        cy.get(el.btnRegister).click();
    }
}

export default new Cadastro();
