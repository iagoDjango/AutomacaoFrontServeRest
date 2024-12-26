import {elements as elementsPage} from "./elements";

class Login{
    visitarPaginaServeRest(){
        cy.visit('https://front.serverest.dev/login')
    }

    cadastrarNovoUsuarioComSucesso(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).type('Iago Cypress')
        cy.get(elementsPage.inputEmailUsuario).type('iagoaystemas@gmail.com')
        cy.get(elementsPage.inputSenhaUsuario).type('123456')
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.validacaoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.btnCadastrar).click()
    }

    preencherCredenciaisValidas(){
        cy.get(elementsPage.inputEmailUsuario).type('iagoaystemas@gmail.com')
        cy.get(elementsPage.inputSenhaUsuario).type('123456')
        cy.get(elementsPage.btnEntrarSistema).click()
        cy.get(elementsPage.verificarLoginComSucesso)
            .should('contain.text', 'Logout')
    }

    cadastrarNovoUsuarioComNomeEmBranco(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).clear()
        cy.get(elementsPage.inputEmailUsuario).type('iagoaystemas@gmail.com')
        cy.get(elementsPage.inputSenhaUsuario).type('123456')
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.validacaoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Nome é obrigatório')
    }

    cadastrarNovoUsuarioComEmailEmBranco(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).type('Iago Cypress')
        cy.get(elementsPage.inputEmailUsuario).clear()
        cy.get(elementsPage.inputSenhaUsuario).type('123456')
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.validacaoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.btnCadastrar).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Email é obrigatório')
    }

    cadastrarNovoUsuarioComSenhaEmBranco(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).type('Iago Cypress')
        cy.get(elementsPage.inputEmailUsuario).type('iagoaystemas@gmail.com')
        cy.get(elementsPage.inputSenhaUsuario).clear()
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.validacaoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.btnCadastrar).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Password é obrigatório')
    }
}
export default new Login()