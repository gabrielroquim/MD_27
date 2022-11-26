/// <reference types="cypress" />

const faker = require('faker-br')
const { loginPage, dashboardPage, enderecoPage } = require('../support/pages')
//const cadEndereco = require('../fixtures/endereco.json')

describe('Cadastro no site EBAC-SHOP', () => {
    beforeEach(() => {
        cy.visit('my-account/')
    });

    it('Deve realizar cadastro do usuário ebac', () => {

        let email = faker.internet.email()
        let pass = faker.internet.password()

        let nome = faker.name.firstName()
        let sobrenome = faker.name.lastName()   
        let pais = faker.address.country()
        let endereco = faker.address.streetName()
        let numero =  1245
        let cidade = faker.address.city()
        let cep = faker.address.zipCode()
        let phone = faker.phone.phoneNumber()

        loginPage.register(email, pass)

        dashboardPage.siteName.should('be.visible')      
       
        enderecoPage.cadastro(nome, sobrenome, pais, endereco, numero, cidade, estado, cep, phone)



        // cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()

    });


    
});