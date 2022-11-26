/// <reference types="cypress" />

const faker = require('faker-br')
const { loginPage, dashboardPage, enderecoPage } = require('../support/pages')


describe('Cadastro no site EBAC-SHOP', () => {
    beforeEach(() => {
        cy.visit('my-account/')
    });

    it('Deve realizar cadastro do usuário ebac', () => {

        let email = faker.internet.email()
        let pass = faker.internet.password()

        let nome = faker.name.firstName()
        let sobrenome = faker.name.lastName()
        let pais = "Brasil"
        let endereco = faker.address.streetName()
        let numero = 1245
        let cidade = "São Paulo"
        let estado = "São Paulo"
        let cep = faker.address.zipCodeValidByState()
        let phone = faker.phone.phoneNumber()

        loginPage.register(email, pass)

        dashboardPage.siteName.should('be.visible')

        enderecoPage.cadastro(nome, sobrenome, pais, endereco, numero, cidade, estado, cep, phone)
        enderecoPage.mensagemAlterado.should('contain', 'Endereço alterado com sucesso.')
        // cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()

    });



});