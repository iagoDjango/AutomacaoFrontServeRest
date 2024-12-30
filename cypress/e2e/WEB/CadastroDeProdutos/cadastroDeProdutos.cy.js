
import cadastroDeProdutos from "../../../pages/produtos/pagesCadastroDeProdutos";

describe('Login no site ServerRest',() =>{
    beforeEach(() =>{
        cadastroDeProdutos.loginServeRest()
    })

    it('CENÁRIO DE TESTE 01: Realizar cadastro de produto com sucesso.',() =>{
        cadastroDeProdutos.cadastrarNovoProdutoComSucesso()
    })

    it('CENÁRIO DE TESTE 02: Verificar cadastro de produto já existente.',() =>{
        cadastroDeProdutos.inserirProdutoJaCadastrado()
    })

    it('CENÁRIO DE TESTE 03:  Realizar cadastro com nome do produto em branco.',() =>{
        cadastroDeProdutos.cadastrarProdutoComNomeEmBranco()
    })

    it('CENÁRIO DE TESTE 04:  Realizar cadastro com preço do produto em branco.',() =>{
        cadastroDeProdutos.cadastrarProdutoComPrecoEmBranco()
    })

    it('CENÁRIO DE TESTE 05:  Realizar cadastro com descrição do produto em branco.',() =>{
        cadastroDeProdutos.cadastrarProdutoComDescricaoEmBranco()
    })

    it('CENÁRIO DE TESTE 06:  Realizar cadastro com quantidade do produto em branco.',() =>{
        cadastroDeProdutos.cadastrarProdutoComQuantidadeEmBranco()
    })
})

