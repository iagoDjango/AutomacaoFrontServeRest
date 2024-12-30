import {elements as elementsPage} from "./elements";

class CadastroProdutos{
    loginServeRest(){
        cy.visit('https://front.serverest.dev/login')
        cy.get(elementsPage.inputEmailUsuario).type('fulano@qa7.com')
        cy.get(elementsPage.inputSenhaUsuario).type('teste')
        cy.get(elementsPage.btnEntrarSistema).click()
    }

    cadastrarNovoProdutoComSucesso(){
        cy.get(elementsPage.menuCadastrarProdutos).click()
        cy.get(elementsPage.inputNomeProduto).type('Cafeteira Minas 5')
        cy.get(elementsPage.inputPrecoProduto).type('5,85')
        cy.get(elementsPage.inputDecricaoProduto).type('O melhor café que você irá tomar!')
        cy.get(elementsPage.inputQuantidadeProduto).type('185')
        cy.get(elementsPage.btnCadastrarProduto).click()
    }

    inserirProdutoJaCadastrado(){
        cy.get(elementsPage.menuCadastrarProdutos).click()
        cy.get(elementsPage.inputNomeProduto).type('Cafeteira Minas')
        cy.get(elementsPage.inputPrecoProduto).type('5,85')
        cy.get(elementsPage.inputDecricaoProduto).type('O melhor café que você irá tomar!')
        cy.get(elementsPage.inputQuantidadeProduto).type('185')
        cy.get(elementsPage.btnCadastrarProduto).click()
        cy.get(elementsPage.validarSeProdutoJaExistente).should('contain.text', 'Já existe produto com esse nome')
    }
    cadastrarProdutoComNomeEmBranco(){
        cy.get(elementsPage.menuCadastrarProdutos).click()
        cy.get(elementsPage.inputNomeProduto).clear()
        cy.get(elementsPage.inputPrecoProduto).type('5,85')
        cy.get(elementsPage.inputDecricaoProduto).type('O melhor café que você irá tomar!')
        cy.get(elementsPage.inputQuantidadeProduto).type('185')
        cy.get(elementsPage.btnCadastrarProduto).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Nome é obrigatório')
    }

    cadastrarProdutoComPrecoEmBranco(){
        cy.get(elementsPage.menuCadastrarProdutos).click()
        cy.get(elementsPage.inputNomeProduto).type('Cafeteira Minas')
        cy.get(elementsPage.inputPrecoProduto).clear()
        cy.get(elementsPage.inputDecricaoProduto).type('O melhor café que você irá tomar!')
        cy.get(elementsPage.inputQuantidadeProduto).type('185')
        cy.get(elementsPage.btnCadastrarProduto).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Preco é obrigatório')
    }

    cadastrarProdutoComDescricaoEmBranco(){
        cy.get(elementsPage.menuCadastrarProdutos).click()
        cy.get(elementsPage.inputNomeProduto).type('Cafeteira Minas')
        cy.get(elementsPage.inputPrecoProduto).type('5,85')
        cy.get(elementsPage.inputDecricaoProduto).clear()
        cy.get(elementsPage.inputQuantidadeProduto).type('185')
        cy.get(elementsPage.btnCadastrarProduto).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Descricao é obrigatório')
    }

    cadastrarProdutoComQuantidadeEmBranco(){
        cy.get(elementsPage.menuCadastrarProdutos).click()
        cy.get(elementsPage.inputNomeProduto).clear()
        cy.get(elementsPage.inputPrecoProduto).type('5,85')
        cy.get(elementsPage.inputDecricaoProduto).type('O melhor café que você irá tomar!')
        cy.get(elementsPage.inputQuantidadeProduto).clear()
        cy.get(elementsPage.btnCadastrarProduto).click()
        cy.get(elementsPage.validarCampoEmbranco)
            .should('contain.text', 'Quantidade é obrigatório')
    }
}
export default new CadastroProdutos()