describe('Cadastrar Usuários',() => {

    it('CENÁRIO DE TESTE 01: Realizar o cadastro de um usuário com sucesso.', () => {
        cy.fixture('authToken.json').then((data) => {

            const usuario = {
                "nome": "Fulano da Silva",
                "email": "beltrano@qa63.com.br",
                "password": "teste",
                "administrador": "true"
            };
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/usuarios',
                body: usuario,

                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equals(201)
                expect(response.body.message).to.equals('Cadastro realizado com sucesso');
                expect(response.body._id).to.be.a('string');
            })
        })
     })

    it('CENÁRIO DE TESTE 02: Realizar o cadastro de um usuário com email já cadastrado.', () => {
        cy.fixture('authToken.json').then((data) => {

            const usuario = {
                "nome": "Fulano da Silva",
                "email": "beltrano@qa.com.br",
                "password": "teste",
                "administrador": "true"
            };
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/usuarios',
                body: usuario,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equals(400)
                expect(response.body.message).to.equals('Este email já está sendo usado');
            })
        })
    })
})