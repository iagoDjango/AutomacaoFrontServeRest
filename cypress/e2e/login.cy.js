import login from "../pages/login";

describe('Login no site ServerRest',() =>{
    beforeEach(() =>{
        login.visitarPaginaServeRest()
        })

    it('CENÁRIO DE TESTE 01: Realizar cadastro de usuário com sucesso!',() =>{
        login.cadastrarNovoUsuarioComSucesso()
    })
    it('CENÁRIO DE TESTE 02: Realizar login com sucesso!',() =>{
        login.preencherCredenciaisValidas()
     })
    it('CENÁRIO DE TESTE 03: Realizar login com nome de usuário em branco!',() =>{
        login.cadastrarNovoUsuarioComNomeEmBranco()
     })
    it('CENÁRIO DE TESTE 04: Realizar login com email de usuário em branco!',() =>{
        login.cadastrarNovoUsuarioComEmailEmBranco()
    })
    it('CENÁRIO DE TESTE 05: Realizar login com senha de usuário em branco!',() =>{
        login.cadastrarNovoUsuarioComSenhaEmBranco()
     })
})