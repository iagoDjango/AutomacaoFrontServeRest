import {elements as elementsPage} from "./elements";

class Login{
    visitarPaginaServeRest(){
        cy.visit('https://front.serverest.dev/login')
    }

    cadastrarNovoUsuarioComSucesso(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).type('Automacao Cypress')
        cy.get(elementsPage.inputEmailUsuario).type('fulano@qa8.com')
        cy.get(elementsPage.inputSenhaUsuario).type('teste')
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.btnCadastrar).click()
        cy.get(elementsPage.mensagemCadastroComSucesso)

    }

    preencherCredenciaisValidas(){
        cy.get(elementsPage.inputEmailUsuario).type('fulano@qa7.com')
        cy.get(elementsPage.inputSenhaUsuario).type('teste')
        cy.get(elementsPage.btnEntrarSistema).click()
        cy.get(elementsPage.validarUsuarioLogado)
        cy.get(elementsPage.sairDoSistema).click()
    }

    cadastrarNovoUsuarioComNomeEmBranco(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).clear()
        cy.get(elementsPage.inputEmailUsuario).type('fulano@qa7.com')
        cy.get(elementsPage.inputSenhaUsuario).type('teste')
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.validacaoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Nome é obrigatório')
    }

    cadastrarNovoUsuarioComEmailEmBranco(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).type('Automacao Cypress')
        cy.get(elementsPage.inputEmailUsuario).clear()
        cy.get(elementsPage.inputSenhaUsuario).type('teste')
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.validacaoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.btnCadastrar).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Email é obrigatório')
    }

    cadastrarNovoUsuarioComSenhaEmBranco(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).type('Automacao Cypress')
        cy.get(elementsPage.inputEmailUsuario).type('fulano@qa7.com')
        cy.get(elementsPage.inputSenhaUsuario).clear()
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.validacaoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.btnCadastrar).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Password é obrigatório')
    }

    cadastrarNovoUsuarioComEmailJaCadastrado(){
        cy.get(elementsPage.linkCadastrarNovoUsuario).click()
        cy.get(elementsPage.inputNomeUsuario).type('Automacao Cypress')
        cy.get(elementsPage.inputEmailUsuario).type('fulano@qa7.com')
        cy.get(elementsPage.inputSenhaUsuario).type('teste')
        cy.get(elementsPage.checkBoxAdministrador).click()
        cy.get(elementsPage.validacaoCadastro)
            .should('contain.text', 'Já é cadastrado?')
        cy.get(elementsPage.btnCadastrar).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Este email já está sendo usado')
    }
}
export default new Login()