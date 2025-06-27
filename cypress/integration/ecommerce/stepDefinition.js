// Step 2 : Create step defination file where all test cases in feature file will be executed
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../support/pageObjects/HomePage.js"



const homePage = new HomePage()
Given('I am on Ecommerce page', function () {
    //Step 3 : Write commands for homepage and import it from Support folder
    homePage.goTo(Cypress.env('url') + "loginpagePractise/")
})

//Step 4
When('I login to the application', function () {
    // Changing from const productpage to this.productpage to execute step 6
    this.productpage = homePage.login(this.data.username, this.data.password)
    this.productpage.pageValidation()
    this.productpage.getCardCount().should('have.length', 4)
})

//Step 10 : Adding stepdefinition for parameterized table
When('I login to the application portal', function(dataTable)
{
    this.productpage = homePage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
    //cy.wait(2000)
    this.productpage.pageValidation()
    this.productpage.getCardCount().should('have.length', 4)
})

//Step 6
When('I add items to cart and checkout', function () {
    // In order to use const variable outside of method scope change the variable keyword from const to this.
    this.productpage.selectProduct(this.data.productName)
    this.productpage.selectFirstProduct()
    this.cartPage = this.productpage.goToCart()
})

//Step 7
When('Validate the total price limit', function () {
    this.cartPage.sumOfProduct().then(function (sum) {
        expect(sum).to.be.lessThan(200000)
    })
})

//Step 8
Then('Select the country submit and verify Thankyou', function () {
    const confirmationPage = this.cartPage.checkoutItems()
    confirmationPage.submitFormDetails()
    confirmationPage.getAlertMessage().should('contain', 'Success')
})