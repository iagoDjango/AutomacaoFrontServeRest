
describe('Cadastro de Produtos', () => {
    let token
    before(() => {
        cy.login();
    })
    it('CENÁRIO DE TESTE 01: Realizar o cadastro de um produto com sucesso.', () => {
        cy.fixture('authToken.json').then((data) => {
            token = data.token;
            const produto = {
                    "nome": "Novo Produto 6",
                    "preco": 470,
                    "descricao": "Mouse",
                    "quantidade": 381
            };
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/produtos',
                body: produto,
                headers: {
                    'Authorization': `${token}`,
                },
                failOnStatusCode: false
            }).then((response) => {
               expect(response.status).to.equals(201)
               expect(response.body.message).to.equals('Cadastro realizado com sucesso');
               expect(response.body.id).to.equals(produto.id);
            })
        })
    })

    it('CENÁRIO DE TESTE 02: Realizar o cadastro de um produto já cadastrado.', () => {
        cy.fixture('authToken.json').then((data) => {
            token = data.token;
            const produto = {
                "nome": "Logitech MX Vertical",
                "preco": 470,
                "descricao": "Mouse",
                "quantidade": 381
            };
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/produtos',
                body: produto,
                headers: {
                    'Authorization': `${token}`,
                },
                failOnStatusCode: false

            }).then((response) => {
                expect(response.status).to.equals(400)
                expect(response.body.message).to.equals('Já existe produto com esse nome');

            })
        })
     })

    it('CENÁRIO DE TESTE 03: Realizar o cadastro de um produto com token ausente.', () => {
        cy.fixture('authToken.json').then((data) => {
            token = data.token;
            const produto = {
                "nome": "Logitech MX Vertical",
                "preco": 470,
                "descricao": "Mouse",
                "quantidade": 381,
                "administrador": "true"
            };
            cy.request({
                method: 'POST',
                url: 'https://serverest.dev/produtos',
                body: produto,
                headers: {
                    'Authorization': '',
                },
                failOnStatusCode: false

            }).then((response) => {
                expect(response.status).to.equals(401)
                expect(response.body.message).to.equals('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
            })
        })
    })
})


