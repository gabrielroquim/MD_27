/// <reference types="cypress" /> 

class loginPage{
    get #registerEmail() {return cy.get('#reg_email')}
    get #registerPass() {return cy.get('#reg_password')}
    get #registerSubmit() {return cy.get(':nth-child(4) > .button')}
    get #clicarEndereco(){ return cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a')}
   // get #preencherEndereco() { return cy.get(':nth-child(1) > .title > .edit')}
   
    register(email,pass){
        this.#registerEmail.type(email, { force: true })
        this.#registerPass.type(pass, { force: true})
        this.#registerSubmit.click()
        this.#clicarEndereco.click()
     //   this.#preencherEndereco.click()
    }

}
    

module.exports = new loginPage()