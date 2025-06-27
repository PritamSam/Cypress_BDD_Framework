// Step 5 : This code will get executed before each test scenario/Test case in feature file
beforeEach(function () {
    cy.fixture('example').then(function (data) {
        this.data = data
        // As We have created a variable of homepage in stepdefinition, we can comment it
        //this.homepage = new Homepage()
    })
})