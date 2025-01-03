// Comando para realizar o login e salvar o token no fixture
import 'cypress-file-upload';
Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            email: 'beltrano@qa.com.br',
            password: 'teste',
        },
    }).then((response) => {
        expect(response.status).to.equals(200);
        // Salve o token no arquivo de fixture
        cy.writeFile('cypress/fixtures/authToken.json', { token: response.body.authorization });
        cy.log(response.body)
    });
});
