describe('Cadastrar Usuários',() => {

    it('CENÁRIO DE TESTE 01: Realizar o cadastro de um usuário com sucesso.', () => {
        cy.fixture('authToken.json').then((data) => {
            token = data.token;
            const usuario = {
                "nome": "Fulano da Silva",
                "email": "beltrano@qa1.com.br",
                "password": "teste",
                "administrador": "true"
            };
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/usuarios',
                body: usuario,
                headers: {
                    'Authorization': `${token}`,
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.equals(201)
                expect(response.body.message).to.equals('Cadastro realizado com sucesso');
                expect(response.body.id).to.equals(usuario.id);
            })
        })
     })
})