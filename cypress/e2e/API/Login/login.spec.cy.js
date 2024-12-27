
describe('Login no site ServerRest',() =>{

        // beforeEach(()=>{
        //     cy.request({
        //         cy.l
        // })


        it('CENÁRIO DE TESTE 01: Realizar cadastro de usuário com sucesso.', () => {
            cy.login()
            })


    // it('CENÁRIO DE TESTE 02: Realizar cadastro de usuário com senha inválida.', () => {
    //     cy.request({
    //         method:'POST',
    //         url:'https://serverest.dev/login',
    //         body:{
    //             "email": "fulano@qa.com",
    //             "password": "testeInvalida"
    //         },
    //         failOnStatusCode: false
    //
    //     }).then((response)=>{
    //         expect(response.status).to.equal(401)
    //         expect(response.body.message).to.equal('Email e/ou senha inválidos')
    //     })
    // });
    //
    // it('CENÁRIO DE TESTE 03: Realizar cadastro de usuário com email inválido.', () => {
    //     cy.request({
    //         method:'POST',
    //         url:'https://serverest.dev/login',
    //         body:{
    //             "email": "fulano@qa.invalido.com",
    //             "password": "teste"
    //         },
    //         failOnStatusCode: false
    //
    //     }).then((response)=>{
    //         expect(response.status).to.equal(401)
    //         expect(response.body.message).to.equal('Email e/ou senha inválidos')
    //     })
    // })
})

