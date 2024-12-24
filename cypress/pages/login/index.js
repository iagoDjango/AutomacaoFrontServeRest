import {elements as elementsPage} from "./elements";

class Login{
    visitarPaginaServeRest(){
        cy.visit('https://front.serverest.dev/login')
    }

    preencherCredenciaisValidas(){
        cy.get(elementsPage.emailUsuario).type('iagoaystemas@gmail.com')
        cy.get(elementsPage.senhaUsuario).type('10203040')
        cy.get(elementsPage.entrar).click()
        cy.get(elementsPage.verificarLoginComSucesso)
            .should('contain.text', 'Logout')
    }

    cadastrarNovoUsuarioComSucesso(){
        cy.get(elementsPage.novoUsuario).click()
        cy.get(elementsPage.nomeUsuario).type('Iago Cypress')
        cy.get(elementsPage.emailUsuario).type('iagoaystemas@gmail.com')
        cy.get(elementsPage.senhaUsuario).type('123456')
        cy.get(elementsPage.administrador).click()
        cy.get(elementsPage.textoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.cadastrar).click()
    }

    cadastrarNovoUsuarioComNomeEmBranco(){
        cy.get(elementsPage.novoUsuario).click()
        cy.get(elementsPage.nomeUsuario).clear()
        cy.get(elementsPage.emailUsuario).type('iagoaystemas@gmail.com')
        cy.get(elementsPage.senhaUsuario).type('123456')
        cy.get(elementsPage.administrador).click()
        cy.get(elementsPage.textoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.cadastrar).click()
        cy.get(elementsPage.validarNomeEmbranco)
            .should('contain.text', 'Nome é obrigatório')
    }

    cadastrarNovoUsuarioComEmailEmBranco(){
        cy.get(elementsPage.novoUsuario).click()
        cy.get(elementsPage.nomeUsuario).type('Iago Cypress')
        cy.get(elementsPage.emailUsuario).clear()
        cy.get(elementsPage.senhaUsuario).type('123456')
        cy.get(elementsPage.administrador).click()
        cy.get(elementsPage.textoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.cadastrar).click()
        cy.get(elementsPage.validarNomeEmbranco)
            .should('contain.text', 'Email é obrigatório')
    }

    cadastrarNovoUsuarioComSenhaEmBranco(){
        cy.get(elementsPage.novoUsuario).click()
        cy.get(elementsPage.nomeUsuario).type('Iago Cypress')
        cy.get(elementsPage.emailUsuario).type('iagoaystemas@gmail.com')
        cy.get(elementsPage.senhaUsuario).clear()
        cy.get(elementsPage.administrador).click()
        cy.get(elementsPage.textoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.cadastrar).click()
        cy.get(elementsPage.validarNomeEmbranco)
            .should('contain.text', 'Password é obrigatório')
    }
}
export default new Login()