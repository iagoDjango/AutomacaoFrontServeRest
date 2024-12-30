describe('Listar Usuários',() => {

    it('CENÁRIO DE TESTE 01: Buscar usuário cadastrado por ID.', () => {
        cy.fixture('authToken.json').then((data) => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos/BeeJh5lz3k6kSIzA',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.headers['content-type']).to.include('application/json');
                expect(response.body).to.be.an('object');
                expect(response.body).to.have.property('nome');
                expect(response.body).to.have.property('preco');
                expect(response.body).to.have.property('descricao');
                expect(response.body).to.have.property('quantidade');
                expect(response.body).to.have.property('_id');
            })
        })
    })

    it('CENÁRIO DE TESTE 02: Buscar produto com id inválido.', () => {
        cy.fixture('authToken.json').then((data) => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos/0uxuPY0cbmQhpEz9',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body.message).to.equals('Produto não encontrado');
            })
        })
    })
})

