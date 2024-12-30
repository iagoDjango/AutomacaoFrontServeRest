describe('Listar Usuários',() => {

    it('CENÁRIO DE TESTE 01: Buscar usuário cadastrado por ID.', () => {
        cy.fixture('authToken.json').then((data) => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz1',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.headers['content-type']).to.include('application/json');
                expect(response.body).to.be.an('object');
                expect(response.body).to.have.property('nome');
                expect(response.body).to.have.property('email');
                expect(response.body).to.have.property('password');
                expect(response.body).to.have.property('administrador');
                expect(response.body).to.have.property('_id');
            })
        })
    })
    it('CENÁRIO DE TESTE 02: Buscar usuário com id inválido.', () => {
        cy.fixture('authToken.json').then((data) => {
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/usuarios/0uxuPY0cbmQhpEz9',
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body.message).to.equals('Usuário não encontrado');
            })
        })
    })
})
